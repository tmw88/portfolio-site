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
              I simply love to build and create. My interests span full-stack
              development, UX/UI design, cloud computing, and database
              management. I’m always excited to explore new technologies and
              push the boundaries of what’s possible.
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
              When I'm not coding, you’ll usually find me doing cardio,
              attending concerts, or planning my next trip!{" "}
            </p>
          </div>
        </InView>
      </Container>
    </section>
  );
}
