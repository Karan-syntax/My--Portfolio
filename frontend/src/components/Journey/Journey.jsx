import "./Journey.css";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaCogs, FaProjectDiagram } from "react-icons/fa";
import { SiSpringboot, SiPython } from "react-icons/si";

const Journey = () => {
  const milestones = [
    {
      type: "education",
      year: "Months 1 - 6 (Completed foundations)",
      title: "Strong Core Java, OOP & Databases",
      subtitle: "Programming Foundations to SQL",
      desc: "Mastered Java syntax, OOP logic, collections, and streams. Learned database design, SQL querying using PostgreSQL, and connecting Java applications with JDBC.",
      icon: <FaGraduationCap />,
    },
    {
      type: "experience",
      year: "Months 7 - 11 (Current focus)",
      title: "Spring Boot Monolith & API Security",
      subtitle: "Enterprise Backend Architecture",
      desc: "Building CRUD REST APIs, JPA mappings, JUnit/Mockito testing, and security layers using JWT. Utilizing Docker to run Spring Boot and database services locally.",
      icon: <SiSpringboot />,
    },
    {
      type: "education",
      year: "Parallel Track (Ongoing)",
      title: "Python for Data Work & AI Serving",
      subtitle: "Data pipelines & LLM Apps",
      desc: "Analyzing data using NumPy/Pandas. Building model serving pipelines and LLM-centric web services with FastAPI to connect with the Spring Boot backend.",
      icon: <SiPython />,
    },
    {
      type: "experience",
      year: "Months 12 - 18 (Upcoming roadmap)",
      title: "System Design, Microservices & CI/CD",
      subtitle: "Scalable Pipelines & Deployment",
      desc: "Caching with Redis, asynchronous messaging (Kafka), building microservice patterns, and deploying using GitHub Actions and cloud services.",
      icon: <FaProjectDiagram />,
    },
  ];

  return (
    <section className="journey" id="journey">
      <div className="container">
        <SectionHeading
          badgeText="My Progress"
          titleText="Learning &"
          titleHighlight="Roadmap"
        />

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="timeline-node">
                <span className="node-icon">{milestone.icon}</span>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-arrow"></div>
                <div className="timeline-date">
                  <FaCalendarAlt className="date-icon" /> {milestone.year}
                </div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <h4 className="timeline-subtitle">{milestone.subtitle}</h4>
                <p className="timeline-desc">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
