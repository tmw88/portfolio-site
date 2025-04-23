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
        color: "#333333",
      }}
    >
      <Container>
        <div
          style={{
            backgroundColor: "#A5B4FC",
            color: "#333333",
            borderRadius: "1rem",
            padding: "3rem 4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflow: "hidden",
            width: "100%",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            About Me
          </h2>
          <p
            style={{
              fontWeight: 400,
              fontSize: "1.05rem",
              lineHeight: "1.8",
              marginBottom: "1.8rem",
              maxWidth: "720px",
              color: "#4B5563",
            }}
          >
            I’m a frontend developer focused on building beautiful, accessible,
            and responsive web applications. What started as a love for visual
            design turned into a passion for creating digital experiences that
            are clean, fast, and intuitive.
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "1.05rem",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
              color: "#4B5563",
            }}
          >
            Technologies I’ve been working with recently:
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
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
                  backgroundColor: "#D8D9FE",
                  borderRadius: "20px",
                  color: "#4B5563",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
