"use client"; // Required for interactive components in Next.js (App Router)

import { Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Ensure react-icons is installed
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1 className="display-3 text-primary">
              Hello, I&apos;m Tristan Winship
            </h1>
            <p className="lead text-muted">
              Full-Stack Developer | Problem Solver | Tech Enthusiast
            </p>
            <Button variant="primary" size="lg" href="#projects">
              View My Projects
            </Button>
          </Col>
        </Row>
      </Container>

      {/* About Me Section */}
      <Container className="mt-5" id="about">
        <Row>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              I am a passionate full-stack developer with experience in building
              scalable applications using modern technologies like Node.js,
              React, Next.js, and more. My focus is on creating user-friendly,
              high-performance websites and applications. I enjoy solving
              problems and continuously learning to keep up with industry
              trends.
            </p>
            <Button variant="outline-primary" href="#contact">
              Contact Me
            </Button>
          </Col>
          <Col md={6}>
            <Image
              src="https://via.placeholder.com/300" // Replace with your image
              alt="Tristan Winship"
              roundedCircle
              fluid
            />
          </Col>
        </Row>
      </Container>

      {/* Skills Section */}
      <Container className="mt-5" id="skills">
        <h2 className="text-center">Skills</h2>
        <Row className="text-center">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Frontend</Card.Title>
                <Card.Text>
                  React, Next.js, HTML, CSS, JavaScript, TypeScript, Bootstrap,
                  Material UI
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Backend</Card.Title>
                <Card.Text>
                  Node.js, Express, MongoDB, MySQL, PostgreSQL, RESTful APIs,
                  GraphQL
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Tools</Card.Title>
                <Card.Text>
                  Git, Docker, AWS, Heroku, CI/CD, Jenkins, Nginx, Webpack,
                  Babel
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container className="mt-5" id="projects">
        <h2 className="text-center">Projects</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A web application built with React and Node.js to manage
                  tasks. Includes authentication, user profiles, and a task
                  dashboard.
                </Card.Text>
                <Button variant="primary" href="#">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Project Two</Card.Title>
                <Card.Text>
                  A real-time chat application with WebSocket and Express.js.
                  Features private rooms and message history.
                </Card.Text>
                <Button variant="primary" href="#">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Project Three</Card.Title>
                <Card.Text>
                  A weather application using React and the OpenWeather API.
                  Displays current weather, forecasts, and location-based data.
                </Card.Text>
                <Button variant="primary" href="#">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="mt-5" id="contact">
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
      </Container>

      {/* Footer Section */}
      <footer className="mt-5 text-center bg-light py-3">
        <p>© 2025 Tristan Winship. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
