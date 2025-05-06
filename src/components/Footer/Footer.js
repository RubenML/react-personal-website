import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import personalData from '../../data/personalData';

const Footer = () => {
  const { name, contact } = personalData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>{name}</h3>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#education">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="social-links">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          
          <div className="copyright">
            <p>&copy; {currentYear} {name}. All rights reserved.</p>
            <p>
              Made with <FaHeart className="heart-icon" /> using React.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
