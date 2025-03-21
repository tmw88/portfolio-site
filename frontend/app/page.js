/*page.js*/

"use client"; // Required for interactive components in Next.js (App Router)

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView hook
import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay the appearance of the main content after the intro animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  // Function to animate each section on scroll
  const fadeInSection = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <div>
      {/* Navigation Bar (Apple-style) */}
      <Navbar
        fixed="top"
        expand="lg"
        style={{
          backgroundColor: "rgba(30, 30, 30, 0.8)", // Dark gray with transparency
          backdropFilter: "blur(10px)", // Slight blur effect
        }}
      >
        <Container>
          <Navbar.Brand href="#" className="text-white fw-bold">
            Tristan Winship
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#projects" className="text-white">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Fade-in Effect (Centered) */}
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
            Full-Stack Developer | Problem Solver | Tech Enthusiast
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button variant="primary" size="lg" href="#projects">
              View My Projects
            </Button>
          </motion.div>
        </Container>
      </div>

      {/* Main Content - Delayed Fade-in */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* About Me Section */}
          <Container className="mt-5 text-center" id="about">
            <motion.div {...fadeInSection}>
              <Row className="justify-content-center">
                <Col md={8}>
                  <h2>About Me</h2>
                  <p>
                    I am a passionate full-stack developer with experience in
                    building scalable applications using modern technologies
                    like Node.js, React, Next.js, and more. My focus is on
                    creating user-friendly, high-performance websites and
                    applications. I enjoy solving problems and continuously
                    learning to keep up with industry trends.
                  </p>
                  <Button variant="outline-primary" href="#contact">
                    Contact Me
                  </Button>
                </Col>
              </Row>
            </motion.div>
          </Container>

          {/* Skills Section */}
          <Container className="mt-5" id="skills">
            <motion.div {...fadeInSection}>
              <h2 className="text-center">Skills</h2>
              <Row className="text-center">
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Frontend</Card.Title>
                      <Card.Text>
                        React, Next.js, HTML, CSS, JavaScript, TypeScript,
                        Bootstrap, Material UI
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Backend</Card.Title>
                      <Card.Text>
                        Node.js, Express, MongoDB, MySQL, PostgreSQL, RESTful
                        APIs, GraphQL
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Tools</Card.Title>
                      <Card.Text>
                        Git, Docker, AWS, Heroku, CI/CD, Jenkins, Nginx,
                        Webpack, Babel
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </motion.div>
          </Container>

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
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        y: -10,
                        boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <Card style={{ width: "100%", cursor: "pointer" }}>
                        <Card.Body>
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Text>{project.description}</Card.Text>
                          <Button variant="primary" href={project.link}>
                            View Project
                          </Button>
                        </Card.Body>
                      </Card>
                    </motion.div>
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
                    variant="outline-dark"
                    href="mailto:tristan.winship@gmail.com"
                  >
                    <FaEnvelope /> Email
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/TristanWinship"
                    target="_blank"
                  >
                    <FaGithub /> GitHub
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    variant="outline-dark"
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
          <footer className="mt-5 text-center bg-light py-3">
            <p>© 2025 Tristan Winship. All Rights Reserved.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
