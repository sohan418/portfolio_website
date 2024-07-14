import React from "react";
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
        <div className="footer-container">
            <h4> © {currentYear} Made by Sohan Singh Bisht. All rights reserved.</h4>
        </div>
  );
};

export default Footer;
