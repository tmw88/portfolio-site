// frontend/app/components/ProjectShowcase.jsx

"use client";
import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        console.log("Fetched projects:", data);

        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchProjects();
  }, []);

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
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project, index) => (
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
                        color: "#4F46E5",
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
                        >
                          Live
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </Row>
      </Container>
    </section>
  );
}
