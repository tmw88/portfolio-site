import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111827", // Dark background
        color: "#FFFFFF", // Light text for contrast
        padding: "2rem 0", // Spacing for the footer
        textAlign: "center", // Center text and icons
        fontSize: "0.9rem", // Adjust font size for footer
      }}
    >
      <div className="contact-icons" style={{ marginBottom: "1rem" }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ margin: "0 10px", color: "#FFFFFF" }}
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ margin: "0 10px", color: "#FFFFFF" }}
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div style={{ fontSize: "0.8rem", color: "#B8B8B8" }}>
        <p>
          &copy; {new Date().getFullYear()} Tristan Winship. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactIcons;
