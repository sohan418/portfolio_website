import React, { useState } from "react";
import './Navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { Folder } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu toggle state

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-inverse navbar-sticky`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <span className="close-icon">✖</span> // Close icon
            ) : (
              <>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </>
            )}
          </button>
          <a className="navbar-brand" href="#">Sohan Singh Bisht</a>
        </div>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'in' : ''}`} id="myNavbar">
          <ul className="nav navbar-nav">
            <li><Link to="/" className="active" onClick={closeMenu}>Home</Link></li>
            <li><a href="#aboutus" onClick={closeMenu}>About Us</a></li>
            <li><a href="#project" onClick={closeMenu} style={{display: "flex",justifyContent: "center",alignItems: "center",gap: "5px"}}> <Folder size={15}/><span>Projects</span></a></li>
            <li><a href="#skill" onClick={closeMenu}>Skills</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/contact" onClick={closeMenu}><span className="glyphicon glyphicon-user"></span> Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
