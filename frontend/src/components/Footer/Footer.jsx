import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <h2>Karan <span>Kumar Verma</span></h2>
          <p>Java Full Stack Developer</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/Karan-syntax" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/karan-kumar-verma-741aa0324/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

        <div className="footer-right">
          <Link to="hero" smooth={true} duration={500} offset={-80} className="scroll-to-top" aria-label="Scroll to top">
            <FaArrowUp />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Karan Kumar Verma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
