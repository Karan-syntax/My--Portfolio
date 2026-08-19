const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');
require('dotenv').config();

// Force Node.js to prefer IPv4 DNS resolution (prevents ENETUNREACH errors on Render/IPv6)
dns.setDefaultResultOrder('ipv4first');

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

// Route 2: Seed Route (Populates clean dummy data into your portfolio cards)
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
