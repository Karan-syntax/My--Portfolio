import { useState } from "react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container">
        <div className="logo">
          <span className="logo-code-icon">&lt;/&gt;</span>
          <h2>
            Karan <span>Kumar Verma</span>
          </h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              onClick={closeNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              onClick={closeNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="tech"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              onClick={closeNav}
            >
              Tech
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              onClick={closeNav}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="journey"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              onClick={closeNav}
            >
              Journey
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              onClick={closeNav}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="resume-btn"
          >
            Hire Me
          </Link>
          <div className="mobile-menu" onClick={toggleNav}>
            {navActive ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {navActive && (
          <motion.div
            className="nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="drawer-links">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onClick={closeNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active"
                  onClick={closeNav}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active"
                  onClick={closeNav}
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active"
                  onClick={closeNav}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="journey"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active"
                  onClick={closeNav}
                >
                  Journey
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active"
                  onClick={closeNav}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="resume-btn drawer-btn"
                  onClick={closeNav}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;