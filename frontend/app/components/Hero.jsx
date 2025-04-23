"use client";

import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Lato } from "next/font/google";
import { motion } from "framer-motion";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Hero() {
  const [shimmerDone, setShimmerDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShimmerDone(true);
    }, 4000); // match the duration of the CSS animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className={lato.className}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9FAFB",
        backgroundImage:
          "linear-gradient(to bottom right,rgb(253, 243, 217), #E0E7FF)",
        textAlign: "center",
        padding: "2rem",
        borderBottomLeftRadius: "4rem",
        borderBottomRightRadius: "4rem",
      }}
    >
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            color: "#1E3A8A",
            fontSize: "1rem",
            marginBottom: "0.75rem",
            fontWeight: 400,
            letterSpacing: "0.05em",
          }}
        >
          Hey👋, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 700,
            marginBottom: "1.5rem",
          }}
        >
          <span className={shimmerDone ? "text-solid" : "gradient-text"}>
            Tristan Winship
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            color: "rgba(75, 85, 99, 0.85)",
            fontSize: "1.125rem",
            fontWeight: 300,
            maxWidth: "40ch",
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
          }}
        >
          I build clean, responsive interfaces with modern web technologies —
          focusing on performance and user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="outline-primary"
            href="#projects"
            style={{
              borderColor: "#6366F1",
              color: "#6366F1",
              fontWeight: 500,
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
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
        </motion.div>
      </Container>
    </section>
  );
}
