"use client";

import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Lato } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Hero() {
  const [shimmerDone, setShimmerDone] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShimmerDone(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
      };

  return (
    <section
      id="hero"
      role="region"
      aria-label="Hero section introducing Tristan Winship"
      className={lato.className}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9FAFB",
        backgroundImage:
          "linear-gradient(to bottom right, rgb(253, 243, 217), #E0E7FF)",
        textAlign: "center",
        padding: "2rem",
        borderBottomLeftRadius: "4rem",
        borderBottomRightRadius: "4rem",
      }}
    >
      <Container>
        <motion.p
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
              })}
          style={{
            fontSize: "var(--font-size-md)",
            marginBottom: "0.75rem",
            fontWeight: 400,
            letterSpacing: "0.05em",
          }}
        >
          Hey there! I'm
        </motion.p>

        <motion.h1
          {...animationProps}
          style={{
            color: "rgba(75, 85, 99, 0.85)",
            fontSize: "var(--font-size-5xl)",
            fontWeight: 700,
            marginBottom: "1.5rem",
          }}
        >
          <span className={shimmerDone ? "text-solid" : "gradient-text"}>
            Tristan Winship
          </span>
        </motion.h1>

        <motion.p
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 },
              })}
          style={{
            fontSize: "var(--font-size-md)",
            fontWeight: 300,
            maxWidth: "40ch",
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
          }}
        >
          This site is for projects I've built and the technologies I’m
          passionate about. Powered by AWS EC2.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            aria-label="Scroll to projects section"
            href="#projects"
            style={{
              border: "2px solid #6366F1",
              backgroundColor: "transparent",
              color: "#6366F1",
              fontWeight: 600,
              padding: "0.75rem 1.5rem",
              fontSize: "var(--font-size-base)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              borderRadius: "0.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#6366F1";
              e.target.style.color = "#FFFFFF";
              e.target.style.boxShadow = "0 4px 14px rgba(99, 102, 241, 0.4)";
              e.target.style.borderRadius = "1rem";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#6366F1";
              e.target.style.boxShadow = "none";
              e.target.style.borderRadius = "0.5rem";
            }}
          >
            View Projects <FiArrowRight />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
