import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        <FaFileAlt />
      </a>
    </div>
  );
};

export default ContactIcons;
