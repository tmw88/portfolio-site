import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#FFFFFF",
        padding: "2rem 0",
        textAlign: "center",
        fontSize: "var(--font-size-sm)",
      }}
    >
      <div className="contact-icons" style={{ marginBottom: "1rem" }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div style={{ fontSize: "var(--font-size-xs)", color: "#B8B8B8" }}>
        <p>
          &copy; {new Date().getFullYear()} Tristan Winship. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactIcons;
