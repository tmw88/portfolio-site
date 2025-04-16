"use client";

import { Container } from "react-bootstrap";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <section
      id="about"
      className={lato.className}
      style={{
        padding: "100px 0",
        backgroundColor: "#F9FAFB",
        color: "#1F2937",
      }}
    >
      <Container style={{ maxWidth: "720px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
            color: "#4F46E5",
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontWeight: 300,
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#4B5563",
            marginBottom: "1.8rem",
          }}
        >
          I’m a frontend developer focused on building beautiful, accessible,
          and responsive web applications. What started as a love for visual
          design turned into a passion for creating digital experiences that are
          clean, fast, and intuitive.
        </p>
        <p
          style={{
            fontWeight: 300,
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#4B5563",
            marginBottom: "1.5rem",
          }}
        >
          Technologies I’ve been working with recently:
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {[
            "JavaScript (ES6+)",
            "React",
            "Next.js",
            "Bootstrap",
            "Node.js",
            "MongoDB",
          ].map((tech, index) => (
            <span
              key={index}
              style={{
                padding: "6px 12px",
                backgroundColor: "#E0E7FF",
                borderRadius: "20px",
                border: "1px solid #6366F1",
                color: "#111827",
                fontSize: "0.9rem",
                fontWeight: 400,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
