import { useState, useEffect } from "react";
import "./ScrollProgress.css";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setScrollProgress(scrollPosition);

    if (scrollTop > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollDistance);
    return () => {
      window.removeEventListener("scroll", calculateScrollDistance);
    };
  }, []);

  return (
    <div className={`progress-wrap ${visible ? "active-progress" : ""}`}>
      <Link to="hero" smooth={true} duration={500} offset={-80}>
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: 307.919 - (307.919 * scrollProgress) / 100,
            }}
          />
        </svg>
        <span className="arrow-icon">
          <FaArrowUp />
        </span>
      </Link>
    </div>
  );
};

export default ScrollProgress;
