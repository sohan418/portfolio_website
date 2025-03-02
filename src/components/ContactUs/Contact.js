import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-text">I’d love to hear from you! Whether it’s about art commissions, freelance development, or exciting collaborations — reach out!</p>
      <div className="contact-links">
        <a href="mailto:sohanbisht418@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/sohan-singh-bisht-bb5788279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sohan418/" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sohanuk_01?igsh=YWZ1b3M4aHpzcWV5" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
