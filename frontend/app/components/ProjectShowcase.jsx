"use client";

import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Lato } from "next/font/google";
//import "./styles/ProjectShowcase.css";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Bootstrap to showcase my work and skills.",
    tech: ["React", "Bootstrap", "Next.js"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourdomain.com",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task manager with user auth, CRUD functionality, and REST API.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className={lato.className}
      style={{
        padding: "80px 0",
        backgroundColor: "#F9FAFB",
        color: "#1F2937",
      }}
    >
      <Container>
        <h2
          style={{
            color: "#4F46E5",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "2.5rem",
          }}
        >
          Projects I've Worked On
        </h2>
        <Row className="gy-4">
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <Card
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#4F46E5", // Indigo
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#4B5563" }}>
                    {project.description}
                  </Card.Text>
                  <div>
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: "inline-block",
                          backgroundColor: "#EEF2FF",
                          color: "#3730A3",
                          borderRadius: "999px",
                          padding: "4px 10px",
                          marginRight: "6px",
                          marginBottom: "6px",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links mt-3">
                    {project.github && (
                      <Button
                        variant="outline-primary"
                        href={project.github}
                        size="sm"
                        className="me-2"
                        style={{
                          borderColor: "#4F46E5",
                          color: "#4F46E5",
                          backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#4F46E5";
                          e.target.style.color = "#FFFFFF";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "#4F46E5";
                        }}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="outline-primary"
                        href={project.demo}
                        size="sm"
                        style={{
                          borderColor: "#6366F1",
                          color: "#6366F1",
                          backgroundColor: "transparent",
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
                        Live
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
