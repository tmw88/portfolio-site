import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "#111827",
        color: "#FFFFFF",
        padding: "2rem 0",
        textAlign: "center",
        fontSize: "var(--font-size-sm)",
      }}
    >
      <div
        className="contact-icons"
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <a
          href="https://github.com/tmw88"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit My GitHub Profile"
          title="GitHub"
        >
          <FaGithub size={24} aria-hidden="true" focusable="false" />
        </a>
        <a
          href="https://www.linkedin.com/in/tristan-winship/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit My LinkedIn Profile"
          title="LinkedIn"
        >
          <FaLinkedin size={24} aria-hidden="true" focusable="false" />
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
