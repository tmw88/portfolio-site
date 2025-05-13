"use client";

import { Container } from "react-bootstrap";
import { Lato } from "next/font/google";
import { InView } from "react-intersection-observer";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <section
      id="about"
      role="region"
      aria-labelledby="about-heading"
      className={lato.className}
      style={{
        padding: "100px 0",
        backgroundColor: "#F9FAFB",
        color: "#333333",
      }}
    >
      <Container>
        <InView
          as="div"
          triggerOnce
          threshold={0.1}
          onChange={(inView) => {
            if (
              inView &&
              window.matchMedia("(prefers-reduced-motion: no-preference)")
                .matches
            ) {
              document
                .getElementById("about-content")
                ?.classList.add("animate-in");
            }
          }}
        >
          <div id="about-content" className="about-content">
            <h2 id="about-heading" className="about-title">
              About Me
            </h2>

            <p className="about-text-lg">
              I’m a frontend developer who simply enjoys building things for the
              web — from clean, intuitive user interfaces to robust backends and
              scalable cloud infrastructure. What began as a love for visual
              design evolved into a passion for crafting fast, accessible, and
              thoughtful digital experiences.
            </p>

            <p className="about-text-base">
              Technologies I’ve been working with recently:
            </p>

            <ul className="about-tech-list">
              {[
                "JavaScript (ES6+)",
                "React",
                "Next.js",
                "Bootstrap",
                "Node.js",
                "MongoDB",
              ].map((tech, index) => (
                <li key={index} className="about-tech-item">
                  {tech}
                </li>
              ))}
            </ul>

            <p className="about-text-note">
              When I’m not coding, I’m usually running, or going to concerts.
            </p>
          </div>
        </InView>
      </Container>
    </section>
  );
}
