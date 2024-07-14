import React, { useEffect, useState } from "react";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsSticky(true);
    } else {
      // Scrolling up
      setIsSticky(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar navbar-inverse navbar-sticky ${isSticky ? 'navbar-hidden' : ''}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">S.S.B</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#skill">Skills</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
