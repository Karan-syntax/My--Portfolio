import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaReact,
  FaGitAlt,
  FaCode,
  FaCube,
  FaStar,
  FaRocket,
  FaEnvelope,
  FaChevronDown,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";

const Hero = () => {
  // Trigonometric positions for the orbiting icons
  const R = 210; // Radius of orbit
  
  // 8 items representing the new professional Java + Python + AI/ML focus
  const techItems = [
    { name: "Java", icon: <FaJava />, color: "#f89820", angle: -90 },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f", angle: -45 },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1", angle: 0 },
    { name: "Python", icon: <SiPython />, color: "#3776ab", angle: 45 },
    { name: "React", icon: <FaReact />, color: "#61dafb", angle: 90 },
    { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e", angle: 135 },
    { name: "Git", icon: <FaGitAlt />, color: "#f05032", angle: 180 },
    { name: "C / DSA", icon: <SiC />, color: "#a8b9cc", angle: 225 },
  ];

  return (
    <section className="hero" id="hero">
      <div className="container hero-wrapper">
        
        {/* ================= LEFT ================= */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="badge-spark">⚡</span>
            <span>BACKEND DEVELOPMENT & AI INTEGRATION</span>
          </div>

          <h1 className="hero-title">
            Crafting <br />
            <span className="gradient-text">Robust Backends</span> <br />
            & Intelligent Systems.
          </h1>

          <h3 className="hero-subtitle">
            Third-Year <span className="highlight-text">Java Full Stack Developer</span>
          </h3>

          <p className="hero-description">
            I am a student at <span className="bold-highlight">Narula Institute of Technology</span>, Kolkata. I specialize in building scalable Java backend monoliths and REST APIs using Spring Boot, coupled with Python for automation, data science, and AI/ML integrations.
          </p>

          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500} offset={-80} className="primary-btn">
              <FaRocket className="btn-icon" /> Explore Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80} className="secondary-btn">
              <FaEnvelope className="btn-icon" /> Contact Me
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaCode className="stat-icon" />
              </div>
              <div className="stat-text">
                <h2>08+</h2>
                <span>Projects</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaCube className="stat-icon" />
              </div>
              <div className="stat-text">
                <h2>12+</h2>
                <span>Skills</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaStar className="stat-icon" />
              </div>
              <div className="stat-text">
                <h2>3rd</h2>
                <span>Year CSE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT (ORBIT) ================= */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="orbit-container">
            {/* Dashed Orbit Lines */}
            <div className="orbit-line outer"></div>
            <div className="orbit-line inner"></div>
            
            {/* Glowing Orbit Dots/Particles */}
            <div className="orbit-particle p1"></div>
            <div className="orbit-particle p2"></div>
            <div className="orbit-particle p3"></div>
            <div className="orbit-particle p4"></div>

            {/* Center Box / Card */}
            <div className="center-card">
              <div className="center-glow"></div>
              <h2 className="center-brand">KARAN</h2>
              <div className="brand-divider"></div>
              <p className="center-role">BACKEND & AI</p>
              <p className="center-tagline">Building robust backend & data solutions.</p>
            </div>

            {/* Orbiting Tech Icons */}
            {techItems.map((item, index) => {
              const angleRad = (item.angle * Math.PI) / 180;
              const x = Math.round(R * Math.cos(angleRad));
              const y = Math.round(R * Math.sin(angleRad));
              return (
                <div
                  key={index}
                  className="tech-orbit-item"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className="tech-icon-circle"
                    style={{
                      "--accent-color": item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="tech-name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down-container">
        <Link to="about" smooth={true} duration={500} offset={-80} className="scroll-down-link">
          <div className="mouse-icon">
            <span className="mouse-wheel"></span>
          </div>
          <span className="scroll-text">Scroll Down</span>
          <FaChevronDown className="scroll-arrow" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;