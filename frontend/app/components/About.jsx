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
            background: "linear-gradient(135deg, #c7d2fe, #a5b4fc)",
            color: "#333333",
            borderRadius: "1.5rem",
            padding: "3rem 4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflow: "hidden",
            width: "100%",
            gap: "1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "var(--font-size-xl)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            About Me
          </h2>

          <p
            style={{
              fontWeight: 400,
              fontSize: "var(--font-size-lg)",
              lineHeight: "1.8",
              maxWidth: "720px",
              color: "#374151",
            }}
          >
            I’m a frontend developer who simply enjoys building things for the
            web — from clean, intuitive user interfaces to robust backends and
            scalable cloud infrastructure. What began as a love for visual
            design evolved into a passion for crafting fast, accessible, and
            thoughtful digital experiences.
          </p>

          <p
            style={{
              fontWeight: 400,
              fontSize: "var(--font-size-base)",
              lineHeight: "1.8",
              color: "#374151",
            }}
          >
            Technologies I’ve been working with recently:
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "1.5rem",
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
                  color: "#1F2937",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: 500,
                  transition: "transform 0.2s ease",
                  cursor: "default",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {tech}
              </span>
            ))}
          </div>

          <p
            style={{
              fontSize: "var(--font-size-sm)",
              fontStyle: "italic",
              color: "#4B5563",
            }}
          >
            When I’m not coding, I’m usually running, or going to concerts.
          </p>
        </div>
      </Container>
    </section>
  );
}
