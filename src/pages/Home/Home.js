// src/pages/Home.js

import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContactUs from "../../components/ContactUs/ContactUs";
import "./home.css"
import TypingText from '../../components/TypingText/TypingText';
import { ArrowUp,CloudDownload } from 'lucide-react';
import Contact from '../../components/ContactUs/Contact';
import SwiperComponent from '../../components/SwiperComponent/SwiperComponent';
import ProjectBox from '../../components/ProjectBox/ProjectBox';
import SkillsSwiper from '../../components/SwiperComponent/SkillsSwiper';
import QualitiesSwiper from '../../components/SwiperComponent/QualitiesSwiper';
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
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 20);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      const scrollStep = -window.scrollY / 50;
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 10);
    };

    const handleFileDownload = () => {
      const fileUrl = "/assets/pdf/sohan_singh_bisht.pdf"; // No ../public — it's served from root
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', fileUrl.split('/').pop()); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
  const phrases = [
    "I'm Sohan Singh Bisht",
    "A passionate Python Full Stack Developer",
    "I build dynamic user-friendly websites",
    "Web Applications"
  ];
  const projects = [
    {
      image: `${process.env.PUBLIC_URL}/assets/images/portfolio-website.png`,
      title: 'Portfolio Website',
      viewLink: '#home',
      githubLink: 'https://github.com/sohan418?tab=repositories'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/e-commerce-website.png`,
      title: 'E-commerce Website',
      viewLink: 'https://e-commerce-sohan.netlify.app/',
      githubLink: 'https://github.com/sohan418?tab=repositories'
    },
    
  ];
  return (
    <>
    <div className="main-container">
      <div className="top-nav-container fade-in" id="home">
       
        <div className="top-heading">
          <h2>Hello! 👋 Welcome to My Portfolio </h2>
          <h1 className='auto-typing'>
          <TypingText texts={phrases} speed={150} eraseSpeed={100} pause={1000} loopPause={1500} />
          </h1>
          {/* <div className="button-container">
            <button className="btn-1">
              <a href="#project">View Projects</a>
            </button>
            <button className="btn-2">Contact Me</button>
          </div> */}
        </div>
        
      </div>

      <div className="about-heading fade-in" id="aboutus">
        <h1>About Me</h1>
        <p>
        I’m a results-oriented developer with a strong foundation in both front-end and back-end technologies. I’m always eager to learn new skills and apply them to build innovative and efficient solutions. Let’s create something amazing together! 🚀 
        </p>
        <div className="button-container">
            <button className="btn-5"  onClick={handleFileDownload}> <CloudDownload size={30}/>  <span>Download My Resume</span>
            </button>
          </div>
      </div>

      <QualitiesSwiper/>

      <div className="child-skill-container fade-in" id="skill">
        <h1>Technical Skills</h1>
      </div>
      <SkillsSwiper/>
      <div className="child-skill-container fade-in" id="project">
        <h1>Projects</h1>
      </div>
      <SwiperComponent
        items={projects}
        renderItem={(project) => <ProjectBox {...project} slidesPerView={4}/>}
      />
      <Contact></Contact>
    </div>
    {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed-button"
        >
          <ArrowUp size={40} />
        </button>
      )}
    </>

  );
};

export default Home;
