import React from 'react';
import { Heart, Github } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          Built with <Heart size={16} className="heart-icon" /> using React
        </p>
        <a
          href="https://github.com/Abdulrahman-Midraara"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <Github size={18} />
          <span>GitHub Profile</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;