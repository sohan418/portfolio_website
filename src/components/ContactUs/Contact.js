import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-text">I’d love to hear from you! Whether it’s about art commissions, freelance development, or exciting collaborations — reach out!</p>
      <div className="contact-links">
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaGithub />
        </a>
        <a href="https://instagram.com/yourartprofile" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;
