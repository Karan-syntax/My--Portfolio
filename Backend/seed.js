const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/portfolio_db';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [String],
    liveLink: String,
    gitLink: String
});
const Project = mongoose.model('Project', projectSchema);

async function seedDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB for seeding...');
        
        await Project.deleteMany({});
        await Project.insertMany([
            {
                title: "Task Management Application",
                description: "A complete application utilizing state flows, context variables, and deep user authentication methods.",
                technologies: ["React", "Express", "Node.js", "MongoDB"],
                liveLink: "#",
                gitLink: "#"
            },
            {
                title: "E-Commerce Web Portal",
                description: "An elegant web portal built to store data elements, structure product lists, and log active shopping data profiles.",
                technologies: ["React", "Node.js", "Express", "MongoDB"],
                liveLink: "#",
                gitLink: "#"
            }
        ]);
        console.log('🎉 Database successfully populated with items!');
    } catch (err) {
        console.error('❌ Error:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedDB();