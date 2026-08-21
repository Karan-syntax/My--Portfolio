import { useState, useEffect } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import axios from "axios";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback projects if the backend is not running
  const fallbackProjects = [
  {
    _id: "1",
    title: "Personal Expense Tracker",
    description:
      "A lightweight command-line financial manager built in C. Supports category budgeting, transaction records, statistics, and persistent file logging.",
    technologies: ["C Programming", "Data Structures", "File I/O"],
    liveLink: "#",
    gitLink:
      "https://github.com/Karan-syntax/personal-expense-tracker",
  },
  {
    _id: "2",
    title: "SkyFlow - Premium Weather & AI Assistant",
    description:
      "A modern weather application with real-time weather information, 5-day forecasts, responsive UI, and an AI-powered assistant for weather, clothing, and activity recommendations.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "AI"],
    liveLink: "https://ai-weather-app-iota.vercel.app",
    gitLink: "https://github.com/Karan-syntax/Ai-weather-App",
  },
];
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/projects`);
        if (response.data && response.data.length > 0) {
          setProjects(response.data);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.warn("Backend API not reachable. Using local fallback projects list.", error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeading
          badgeText="My Portfolio"
          titleText="Recent"
          titleHighlight="Projects"
        />

        {loading ? (
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <motion.div
                key={project._id || idx}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="project-card-glow"></div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.gitLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.liveLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
