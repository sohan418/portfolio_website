// src/pages/Home.js

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContactUs from "../../components/ContactUs/ContactUs";
import "./home.css"

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main-container">
      <div className="top-nav-container" id="home">
      <div className="top-box-container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-image.png.jpg`}
            alt="User with laptop"
            height={400}
            width={400}
          />
        </div>
        <div className="top-heading">
          <h1>Hi! Welcome to My Portfolio</h1>
          <p>
            I'm Sohan Singh Bisht, a passionate Software developer with
            expertise in building dynamic, user-friendly websites and web
            applications.
          </p>
          <div className="button-container">
            <button className="btn-1">
              <a href="#project">View Project</a>
            </button>
            <button className="btn-2">Contact Us</button>
          </div>
        </div>
        
      </div>

      <div className="about-heading" id="aboutus">
        <h1>About Me</h1>
        <p>
          I'm a results-oriented developer with a strong foundation in front-end
          and back-end technologies. I'm always eager to learn new technologies
          and apply them to create innovative solutions.
        </p>
      </div>

      <Carousel responsive={responsive}>
        <div className="child-box-container">
          <h2>Problem Solver</h2>
          <p>
            I enjoy finding creative solutions to technical challenges and
            translating complex requirements into functional web applications.
          </p>
        </div>
        <div className="child-box-container">
          <h2>Team Player</h2>
          <p>
            I thrive in collaborative environments and have a proven ability to
            work effectively with designers, product managers, and other
            developers to deliver exceptional results.
          </p>
        </div>
        <div className="child-box-container">
          <h2>Passionate Learner</h2>
          <p>
            I'm constantly seeking new knowledge and opportunities to expand my
            skills, keeping myself updated on the latest trends and advancements
            in web development.
          </p>
        </div>
      </Carousel>

      <div className="child-skill-container" id="skill">
        <h1>Technical Skills</h1>
      </div>
      <Carousel responsive={responsive}>
        <div className="skill-list">
          <h2>Front-End</h2>
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/html-logo.png`}
                alt="html"
                height={30}
                width={30}
              /> HTML
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/css-logo.png`}
                alt="css"
                width={30}
                height={30}
              />
              <span> CSS</span>
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/JavaScript-logo.png`}
                alt="js"
                width={30}
                height={30}
              /> JavaScript
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/react-icon.png`}
                alt="react"
                width={30}
                height={30}
              /> React
            </li>
          </ul>
        </div>
        <div className="skill-list">
          <h2>Back-End</h2>
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/python-logo.png`}
                alt="python"
                width={30}
                height={30}
              /> Python
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/flask-logo.png`}
                alt="flask"
                width={30}
                height={30}
              /> Flask
            </li>
          </ul>
        </div>
        <div className="skill-list">
          <h2>Databases</h2>
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/mysql-logo.png`}
                alt="mysql"
                width={30}
                height={30}
              /> MySQL
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/mongodb-logo.png`}
                alt="mongodb"
                width={30}
                height={30}
              /> MongoDB
            </li>
          </ul>
        </div>
        <div className="skill-list">
          <h2>Familiar with tools</h2>
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/vs-code-logo.png`}
                alt="vs-code"
                width={30}
                height={30}
              /> VS Code
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/git-logo.png`}
                alt="github"
                width={30}
                height={30}
              /> GitHub
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/excel-logo.png`}
                alt="excel"
                width={30}
                height={30}
              /> Excel
            </li>
          </ul>
        </div>
      </Carousel>

      <div className="child-skill-container" id="project">
        <h1>Projects</h1>
      </div>
      <Carousel responsive={responsive}>
        <div className="project-box-container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio-website.png`}
            alt="portfolio website"
          />
          <h2>Portfolio Website</h2>
          <div className="button-container">
            <button className="btn-3">
              <a href="#home">View</a>
            </button>
            <button className="btn-4">
              <a href="https://github.com/sohan418?tab=repositories">GitHub</a>
            </button>
          </div>
        </div>
        <div className="project-box-container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/e-commerce-website.png`}
            alt="e-commerce website"
          />
          <h2>E-commerce Website</h2>
          <div className="button-container">
            <button className="btn-3">
              <a href="https://e-commerce-sohan.netlify.app/">View</a>
            </button>
            <button className="btn-4">
              <a href="https://github.com/sohan418?tab=repositories">GitHub</a>
            </button>
          </div>
        </div>
      </Carousel>
      <ContactUs/>
    </div>
  );
};

export default Home;
