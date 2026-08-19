import { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import axios from "axios";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaUser, FaGithub, FaLinkedin } from "react-icons/fa";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        message: "Please fill out all the fields.",
      });
      return;
    }

    setStatus({ submitting: true, success: null, message: "" });

    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      if (response.data && response.data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: "Thank you! Your message was saved in our database.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: response.data.message || "Server received request but failed to save.",
        });
      }
    } catch (error) {
      console.error("Error submitting contact request", error);
      setStatus({
        submitting: false,
        success: false,
        message: "Failed to connect to backend API server. Message not recorded.",
      });
    }
  };

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
                  <a href="mailto:karan.kr.v@gmail.com">karan.kr.v@gmail.com</a>
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

          {/* Right Form Card */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-glow"></div>
              
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="form-icon" /> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Karan Kumar Verma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="form-icon" /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FaPaperPlane className="submit-icon" />
                  </>
                )}
              </button>

              {status.message && (
                <div
                  className={`status-message ${status.success ? "success" : "error"}`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
