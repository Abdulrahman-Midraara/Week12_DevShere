import React from 'react';

// ✅ Import routing tools for navigation and route highlighting
import { Link, useLocation } from 'react-router-dom';

import { Github } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation(); // ✅ Used to highlight the current active link

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Logo links back to home page */}
        <Link to="/" className="navbar-logo">
          <Github size={24} />
          <span>DevSphere</span>
        </Link>

        {/* ✅ Navigation Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            {/* ✅ New Contact Route */}
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
