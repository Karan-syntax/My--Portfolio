import "./About.css";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaGraduationCap, FaCode, FaAward, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../../assets/images/profile.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHeading
          badgeText="Overview"
          titleText="Professional"
          titleHighlight="Profile"
        />

        <div className="about-wrapper">
          {/* Left Side: Profile Image & Card */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-card">
              <div className="about-card-glow"></div>
              <div className="card-content">
                <div className="profile-img-container">
                  <img src={profileImg} alt="Karan Kumar Verma" className="profile-img" />
                </div>
                <h3>Karan Kumar Verma</h3>
                <p className="card-role">Java Full Stack Developer</p>
                
                <div className="card-details">
                  <div className="detail-row">
                    <strong>Location:</strong> <span>Kolkata, India</span>
                  </div>
                  <div className="detail-row">
                    <strong>Focus:</strong> <span>Java Backend & AI Integration</span>
                  </div>
                  <div className="detail-row">
                    <strong>Email:</strong> <span>karan.kr.v@gmail.com</span>
                  </div>
                  <div className="detail-row">
                    <strong>GitHub:</strong> <a href="https://github.com/Karan-syntax" target="_blank" rel="noopener noreferrer" style={{color: "var(--primary)", textDecoration: "underline"}}>github.com/Karan-syntax</a>
                  </div>
                  <div className="detail-row">
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karan-kumar-verma-741aa0324/" target="_blank" rel="noopener noreferrer" style={{color: "var(--primary)", textDecoration: "underline"}}>linkedin.com/in/karan-kumar-verma-741aa0324</a>
                  </div>
                </div>

                <div className="about-tags">
                  <span className="about-tag">Java / Spring Boot</span>
                  <span className="about-tag">Python / FastAPI</span>
                  <span className="about-tag">PostgreSQL / SQL</span>
                  <span className="about-tag">React / JavaScript</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text & Quick Highlights */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-text">
              I am Karan Kumar Verma, a Third-year student at Narula Institute of Technology, Kolkata, specializing as a Java Full Stack Developer. I enjoy designing clean, scalable backend systems, working with relational databases, and integrating Python-powered AI/ML features into web applications.
            </p>
            <p className="about-text">
              Rather than just learning concepts theoretically, I focus on building real-world projects, testing them thoroughly, and deploying them. My goal is to build secure, robust software that solves practical user problems.
            </p>

            <div className="about-grid">
              <div className="about-grid-card">
                <FaCode className="grid-card-icon" />
                <h4>Backend Dev</h4>
                <p>Designing REST APIs and business logic using Java, Spring Boot, and PostgreSQL</p>
              </div>

              <div className="about-grid-card">
                <FaGraduationCap className="grid-card-icon" />
                <h4>Data & AI</h4>
                <p>Processing data with Pandas/NumPy and serving models with Python/FastAPI</p>
              </div>

              <div className="about-grid-card">
                <FaReact className="grid-card-icon" />
                <h4>Full-Stack</h4>
                <p>Building client-side layouts, state flows, and modular components in React</p>
              </div>

              <div className="about-grid-card">
                <FaAward className="grid-card-icon" />
                <h4>DSA & OOP</h4>
                <p>Solving problem patterns and mastering OOP concepts, lists, heaps, and trees</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
