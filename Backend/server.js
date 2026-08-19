const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(express.json()); // Parses incoming JSON requests

// Explicit CORS configuration to allow local development ports and your production frontend
const allowedOrigins = [
    "http://localhost:5173", 
    "http://127.0.0.1:5173", 
    "http://localhost:5174", 
    "http://127.0.0.1:5174"
];

if (process.env.FRONTEND_URL) {
    allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, postman, or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
            return callback(null, true);
        }
        return callback(new Error('CORS policy: This origin is not allowed access.'));
    },
    credentials: true
}));

// --- MongoDB Local Connection String ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => console.error('❌ MongoDB database connection error:', err));

// --- Database Schemas & Models ---

// 1. Projects Schema
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [String],
    liveLink: String,
    gitLink: String
});
const Project = mongoose.model('Project', projectSchema);

// 2. Contact Messages Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);


// --- Configure Nodemailer Transporter ---
// Log securely using environment variables loaded from the .env file
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
    }
});


// --- API Routes ---

// Route 1: Get all projects for your portfolio cards
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Server Error fetching project details' });
    }
});

// Route 2: Receive and save a user contact message, then forward to Karan
app.post('/api/contact', async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(200).json({ success: false, message: "⚠️ Request body reached backend completely empty." });
        }

        const { name, email, message } = req.body;

        // 1. Try to Save to MongoDB
        try {
            const newContact = new Contact({ name, email, message });
            await newContact.save();
            console.log("✅ Message safely logged into MongoDB!");
        } catch (dbError) {
            console.error('❌ Database Error:', dbError.message);
            // If database fails, report it directly to the UI instead of crashing with a 500 error!
            return res.status(201).json({ 
                success: false, 
                message: `❌ MongoDB Database Error: ${dbError.message}. Make sure your local MongoDB service is running!` 
            });
        }

        // 2. Setup the Email Notification Layout
        const mailOptions = {
            from: 'karan.kr.v@gmail.com', 
            to: 'karan.kr.v@gmail.com',   
            replyTo: email,               
            subject: `💼 New Portfolio Message from ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <h2 style="color: #0284c7; margin-top: 0;">You have a new portfolio submission!</h2>
                    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;" />
                    <p><strong>Client Name:</strong> ${name}</p>
                    <p><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
                    <p style="margin-bottom: 5px;"><strong>Message Details:</strong></p>
                    <div style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #38bdf8; border-radius: 4px; font-style: italic; color: #334155;">
                        "${message}"
                    </div>
                </div>
            `
        };

        // 3. Try to Send the Email (Asynchronously in background so the UI doesn't hang)
        transporter.sendMail(mailOptions)
            .then(() => console.log('✉️ Email notification sent successfully!'))
            .catch(mailError => console.error('❌ Background Nodemailer Error:', mailError.message));

        return res.status(201).json({ 
            success: true, 
            message: 'Thank you! Your message was saved and emailed successfully.' 
        });

    } catch (error) {
        return res.status(201).json({ success: false, message: `❌ Server processing error: ${error.message}` });
    }
});

// Route 3: Seed Route (Populates clean dummy data into your portfolio cards)
app.get('/api/seed', async (req, res) => {
    try {
        await Project.deleteMany({}); // Clears old entries
        await Project.insertMany([
            {
                title: "Personal Expense Tracker",
                description: "A lightweight command-line financial manager built in C. Supports category budgeting, transaction records, statistics, and persistent file logging.",
                technologies: ["C Programming", "Data Structures", "File I/O"],
                liveLink: "#",
                gitLink: "https://github.com/Karan-syntax/personal-expense-tracker"
            }
        ]);
        res.json({ message: "Database successfully populated with clean items!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// --- Server Startup Activation ---
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server navigating fluidly on port ${PORT}`);
});