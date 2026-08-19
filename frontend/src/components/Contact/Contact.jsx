import "./Contact.css";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeading
          badgeText="Contact Me"
          titleText="Let's build"
          titleHighlight="Something Great"
        />

        <div className="contact-wrapper">
          {/* Left Info Columns */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3>Get In Touch</h3>
            <p>
              Have an opening for an internship, a project idea, or just want to connect? Drop a message!
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-detail-text">
                  <h4>Email</h4>
                  <a href="mailto:karan.kr.v24@gmail.com">karan.kr.v24@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaGithub />
                </div>
                <div className="contact-detail-text">
                  <h4>GitHub</h4>
                  <a href="https://github.com/Karan-syntax" target="_blank" rel="noopener noreferrer">Karan-syntax</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-detail-text">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/karan-kumar-verma-741aa0324/" target="_blank" rel="noopener noreferrer">Karan Kumar Verma</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail-text">
                  <h4>Location</h4>
                  <span>Kolkata, West Bengal, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Direct email card — no backend or SMTP service required. */}
          <motion.div
            className="contact-cta-container"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-cta">
              <div className="contact-glow"></div>
              <FaEnvelope className="contact-cta-icon" />
              <h3>Send me an email</h3>
              <p>Your email app will open with my address already filled in.</p>
              <a className="submit-btn" href="mailto:karan.kr.v24@gmail.com">
                Email Karan <FaPaperPlane className="submit-icon" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
