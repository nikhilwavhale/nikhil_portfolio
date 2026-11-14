import React, { useState, useEffect } from 'react';
import { 
  FaUser, 
  FaCode, 
  FaGraduationCap, 
  FaBriefcase, 
  FaEnvelope, 
  FaSun, 
  FaMoon 
} from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  return (
    <nav className="navbar-horizontal">
      <a href="#about" className="nav-logo">
        Nikhil<span>.Dev</span>
      </a>
      
      <ul className="nav-links">
        <li>
          <a href="#about">
            <FaUser size={15} /> <span className="nav-text">About</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <FaCode size={15} /> <span className="nav-text">Skills</span>
          </a>
        </li>
        <li>
          <a href="#education">
            <FaGraduationCap size={15} /> <span className="nav-text">Education</span>
          </a>
        </li>
        {/* <li>
          <a href="#projects">
            <FaBriefcase size={15} /> <span className="nav-text">Projects</span>
          </a>
        </li> */}
        <li>
          <a href="#contact">
            <FaEnvelope size={15} /> <span className="nav-text">Contact</span>
          </a>
        </li>
        
        <li>
          <button 
            className="theme-toggle" 
            onClick={() => setIsLightMode(!isLightMode)}
            aria-label="Toggle theme"
          >
            {isLightMode ? <FaMoon size={16} /> : <FaSun size={16} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;