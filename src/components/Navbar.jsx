import React from 'react';

// ✅ FIXED: Import Link component for client-side navigation
import { Link, useLocation } from 'react-router-dom';

import { Github } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation(); // Optional: can be used to highlight active route if needed

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
            {/* ✅ Home Route */}
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            {/* ✅ Projects Route */}
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
