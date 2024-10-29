import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='pos'>
    <nav className="navbar">
      <div className="navbar-brand"><span className='colo'>A</span><span className='colo2'>nmolpreet </span><span className='colo'>S</span><span className='colo2'>ingh</span></div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className='contain'>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <span className="separator">|</span>
        <a href="https://github.com/AnmolKHIVA/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/anmolpreet-singh-227069255/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://leetcode.com/u/Anmolpreet_Singh-1/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fas fa-code"></i>
          </a> 
          {/* <a href="https://leetcode.com/u/Anmolpreet_Singh-1/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="path_to_your_logo.png" alt="LeetCode Logo" />
          </a> */}

      </div>
      </div>
      
    </nav>
    </div>
  );
};

export default Navbar;
