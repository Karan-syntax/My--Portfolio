import "./Skills.css";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import {
  FaReact,
  FaGitAlt,
  FaCode,
  FaJava,
  FaTerminal,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiSpringboot,
  SiPostgresql,
  SiFastapi,
  SiPandas,
} from "react-icons/si";

const Skills = () => {
  const categories = [
    {
      title: "Java Backend (Primary Track)",
      skills: [
        { name: "Java (OOP & Core)", icon: <FaJava />, color: "#f89820", level: "OOP, Exceptions, Generics" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f", level: "MVC, JPA, REST APIs" },
        { name: "Unit Testing", icon: <FaTerminal />, color: "#ef4444", level: "JUnit 5 & Mockito" },
        { name: "Hibernate / JPA", icon: <FaDatabase />, color: "#43c8d3", level: "Mappings, ORM, Transactions" },
      ],
    },
    {
      title: "Python & AI Track",
      skills: [
        { name: "Python Core", icon: <SiPython />, color: "#3776ab", level: "Scripting & Automation" },
        { name: "Data Stack", icon: <SiPandas />, color: "#150458", level: "Pandas, NumPy, Plotting" },
        { name: "FastAPI & LLM", icon: <SiFastapi />, color: "#009688", level: "AI App & Serving Models" },
        { name: "scikit-learn", icon: <FaCode />, color: "#f18a24", level: "ML Models & Pipelines" },
      ],
    },
    {
      title: "Databases & DevOps",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1", level: "SQL, Joins, Transactions" },
        { name: "Git & GitHub", icon: <FaGitAlt />, color: "#f05032", level: "Collaborative Control" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ed", level: "Containerized Monoliths" },
        { name: "GitHub Actions", icon: <FaTerminal />, color: "#2088ff", level: "CI/CD & Deploy Pipelines" },
      ],
    },
    {
      title: "Foundations & Frontend",
      skills: [
        { name: "C & DSA", icon: <SiC />, color: "#a8b9cc", level: "Memory, Arrays, Lists, Trees" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e", level: "Interactive Elements" },
        { name: "React.js", icon: <FaReact />, color: "#61dafb", level: "State Flow Layouts" },
        { name: "HTML5 & CSS3", icon: <FaCode />, color: "#e34f26", level: "Sleek Custom Layouts" },
      ],
    },
  ];

  return (
    <section className="tech" id="tech">
      <div className="container">
        <SectionHeading
          badgeText="My Tech Stack"
          titleText="Skills &"
          titleHighlight="Technologies"
        />

        <div className="skills-wrapper">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className="skills-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            >
              <h3>{cat.title}</h3>
              <div className="skills-list">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div
                      className="skill-icon-wrapper"
                      style={{ "--skill-glow-color": skill.color }}
                    >
                      <span className="skill-icon" style={{ color: skill.color }}>
                         {skill.icon}
                      </span>
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span>{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
