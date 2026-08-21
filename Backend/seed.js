const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  liveLink: String,
  gitLink: String,
});

const Project = mongoose.model("Project", projectSchema);

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas for seeding...");

    await Project.deleteMany({});

    await Project.insertMany([
      {
        title: "Personal Expense Tracker",
        description:
          "A lightweight command-line financial manager built in C. Supports category budgeting, transaction records, statistics, and persistent file logging.",
        technologies: ["C Programming", "Data Structures", "File I/O"],
        liveLink: "#",
        gitLink:
          "https://github.com/Karan-syntax/personal-expense-tracker",
      },
      {
        title: "SkyFlow - Premium Weather & AI Assistant",
        description:
          "A modern weather application with real-time weather information, 5-day forecasts, responsive UI, and an AI-powered assistant for weather, clothing, and activity recommendations.",
        technologies: [
          "React",
          "JavaScript",
          "Node.js",
          "Express",
          "MongoDB",
          "AI",
        ],
        liveLink: "https://ai-weather-app-iota.vercel.app",
        gitLink: "https://github.com/Karan-syntax/Ai-weather-App",
      },
      {
        title: "SYNORA - GenAI Workspace",
        description:
          "A modern AI-powered workspace designed to bring multiple generative AI capabilities together in one application, with intelligent interactions and a responsive productivity-focused interface.",
        technologies: [
          "React",
         "TypeScript",
          "Express",
          "MongoDB",
          "Groq API",
          "Sarvam AI",
    ],
    liveLink: "https://synora-beige.vercel.app",
    gitLink: "https://github.com/Karan-syntax/SYNORA",
  },
    ]);

    console.log("🎉 Database successfully populated with projects!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.connection.close();
  }
}

seedDB();