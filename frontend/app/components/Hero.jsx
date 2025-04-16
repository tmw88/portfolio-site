"use client";

import { Container, Button } from "react-bootstrap";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section
      id="hero"
      className={lato.className}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F5F9",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <Container>
        <p
          style={{
            color: "#6366F1",
            fontSize: "1rem",
            marginBottom: "0.5rem",
            fontWeight: 400,
          }}
        >
          Hi, I'm Tristan
        </p>
        <h1
          style={{
            fontSize: "3rem",
            color: "#1E3A8A",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          Frontend Developer
        </h1>
        <p
          style={{
            color: "#4B5563",
            fontSize: "1.125rem",
            fontWeight: 300,
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            lineHeight: "1.6",
          }}
        >
          I build clean, responsive interfaces with modern web technologies —
          focusing on performance and user experience.
        </p>
        <Button
          variant="outline-primary"
          href="#projects"
          style={{
            borderColor: "#6366F1",
            color: "#6366F1",
            fontWeight: 400,
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            transition: "background-color 0.3s ease, color 0.3s ease",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#6366F1";
            e.target.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#6366F1";
          }}
        >
          View Projects
        </Button>
      </Container>
    </section>
  );
}
