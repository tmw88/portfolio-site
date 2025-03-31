/*page.js*/
"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView hook
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./components/ProjectCard";
import CustomNavbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import useFadeIn from "./hooks/useFadeIn";
import CustomButton from "./components/CustomButton";
import Skills from "./components/Skills";
import FloatingContact from "./components/FloatingContact";

export default function Home() {
  const { showContent, fadeInSection } = useFadeIn();

  return (
    <div>
      <CustomNavbar />

      {/* Floating Contact Button (Always Visible) */}
      <FloatingContact />

      {/* Hero Section */}
      <div className="heroSection">
        <Container>
          <motion.h1
            className="display-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I&apos;m Tristan Winship
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full-Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <CustomButton href="#projects">View My Projects</CustomButton>
          </motion.div>
        </Container>
      </div>

      {/* Main Content - Delayed Fade-in */}
      {showContent && (
        <motion.div
          initial={fadeInSection.initial}
          whileInView={fadeInSection.whileInView}
          transition={fadeInSection.transition}
        >
          <AboutMe />
          <Skills />

          {/* Projects Section */}
          <Container className="mt-5" id="projects">
            <motion.div {...fadeInSection}>
              <h2 className="text-center">Projects</h2>
              <Row>
                {[
                  {
                    title: "Project One",
                    description:
                      "A web application built with React and Node.js to manage tasks. Includes authentication, user profiles, and a task dashboard.",
                    link: "#",
                  },
                  {
                    title: "Project Two",
                    description:
                      "A real-time chat application with WebSocket and Express.js. Features private rooms and message history.",
                    link: "#",
                  },
                  {
                    title: "Project Three",
                    description:
                      "A weather application using React and the OpenWeather API. Displays current weather, forecasts, and location-based data.",
                    link: "#",
                  },
                ].map((project, index) => (
                  <Col
                    md={4}
                    key={index}
                    className="d-flex justify-content-center"
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      link={project.link}
                    />
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Container>

          {/* Contact Section */}
          <Container className="mt-5" id="contact">
            <motion.div {...fadeInSection}>
              <h2 className="text-center">Contact Me</h2>
              <Row className="text-center">
                <Col md={4}>
                  <Button
                    variant="outline-primary"
                    href="mailto:tristan.winship@gmail.com"
                  >
                    <FaEnvelope /> Email
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    variant="outline-primary"
                    href="https://github.com/TristanWinship"
                    target="_blank"
                  >
                    <FaGithub /> GitHub
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    variant="outline-primary"
                    href="https://www.linkedin.com/in/tristanwinship"
                    target="_blank"
                  >
                    <FaLinkedin /> LinkedIn
                  </Button>
                </Col>
              </Row>
            </motion.div>
          </Container>

          {/* Footer Section */}
          <footer className="footer mt-5 text-center py-3">
            <p>© 2025 Tristan Winship. All Rights Reserved.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
