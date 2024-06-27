import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://github.com/devanshugupta24" target="_blank" rel="noopener noreferrer">
            <img className="fa-brands" src="github (1).jpg" alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/devanshu_2402/" target="_blank" rel="noopener noreferrer">
            <img className="fa-brands" src="instagram (1).jpg" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/devanshu-gupta24/" target="_blank" rel="noopener noreferrer">
            <img className="fa-brands" src="linkedin (1).jpg" alt="LinkedIn" />
          </a>
        </div>
        <div className="details">
          <p>
            Devanshu Gupta &nbsp; |&nbsp; &nbsp; guptadevanshu24@gmail.com &nbsp;
            |&nbsp; &nbsp; 9142088391 &nbsp; |&nbsp;&nbsp; Kaimur, Bihar
          </p>
        </div>
        <div className="footerNav">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="aboutme" smooth={true} duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
