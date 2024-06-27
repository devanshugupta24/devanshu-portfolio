import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="dali">
        <h2 className="headname">DEVANSHU GUPTA</h2>
      </div>
      <div className="link-grp">
        <ul className="links">
          <li className="link-items">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="link-items">
            <Link to="aboutme" smooth={true} duration={500}>
              About me
            </Link>
          </li>
          <li className="link-items">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="link-items">
            <Link to="projects" smooth={true} duration={500}>
              My projects
            </Link>
          </li>
          <li className="link-items">
            <Link to="contacts" smooth={true} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}


