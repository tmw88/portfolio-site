"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Lato } from "next/font/google";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { InView } from "react-intersection-observer";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
        );
        const data = await res.json();
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

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    backgroundColor: "#EEF2FF",
    borderRadius: "20px",
    color: "#3730A3",
    fontWeight: 500,
    fontSize: "var(--font-size-sm)",
    textDecoration: "none",
    transition: "all 0.2s ease",
  };

  return (
    <section
      id="projects"
      className={lato.className}
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #f3f4f6, #ffffff)",
        color: "#1F2937",
      }}
      aria-labelledby="projects-heading"
    >
      <Container>
        <h2
          id="projects-heading"
          style={{
            fontSize: "var(--font-size-xl)",
            fontWeight: 700,
            marginBottom: "2.5rem",
          }}
          tabIndex={0}
        >
          Projects I've Worked On
        </h2>

        <Row className="gy-4" role="list">
          {projects.map((project, index) => (
            <InView triggerOnce threshold={0.1} key={index}>
              {({ inView, ref }) => (
                <Col
                  md={6}
                  lg={4}
                  ref={ref}
                  className={`project-card-wrapper ${inView ? "fade-in" : ""}`}
                  role="listitem"
                >
                  <article
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "1rem",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      height: "100%",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      cursor: "default",
                    }}
                    aria-labelledby={`project-title-${index}`}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0, 0, 0, 0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.06)";
                    }}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                          borderRadius: "0.75rem",
                        }}
                      />
                    )}
                    <h3
                      id={`project-title-${index}`}
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        margin: 0,
                      }}
                      tabIndex={0}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#4B5563",
                        flexGrow: 1,
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      aria-label="Technologies used"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "6px 12px",
                            backgroundColor: "#E0E7FF",
                            borderRadius: "20px",
                            color: "#1F2937",
                            fontSize: "var(--font-size-sm)",
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "auto",
                      }}
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={linkStyle}
                          aria-label={`View ${project.title} on GitHub`}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.backgroundColor = "#DDE3FF";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.backgroundColor = "#EEF2FF";
                          }}
                        >
                          <FaGithub aria-hidden="true" /> GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={linkStyle}
                          aria-label={`Visit live demo of ${project.title}`}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.backgroundColor = "#DDE3FF";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.backgroundColor = "#EEF2FF";
                          }}
                        >
                          <FaExternalLinkAlt aria-hidden="true" /> Live
                        </a>
                      )}
                    </div>
                  </article>
                </Col>
              )}
            </InView>
          ))}
        </Row>
      </Container>
    </section>
  );
}
