"use client";

import { Container, Card } from "react-bootstrap";
import { Lato } from "next/font/google";
import { InView } from "react-intersection-observer";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const cardStyle = {
  marginBottom: "2rem",
  border: "none",
  borderLeft: "4px solid #6366F1",
  borderRadius: "0",
  padding: "1.5rem 1.25rem",
  backgroundColor: "transparent",
};

const cardTitleStyle = {
  fontWeight: 600,
  fontSize: "var(--font-size-lg)",
  marginBottom: "0.5rem",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className={lato.className}
      style={{
        padding: "80px 0",
        backgroundColor: "#E5E7EB",
        color: "#1F2937",
      }}
      aria-labelledby="experience-heading"
    >
      <Container>
        <InView triggerOnce threshold={0.15}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`experience-content ${inView ? "fade-in" : ""}`}
            >
              <h2
                id="experience-heading"
                style={{
                  fontWeight: 700,
                  fontSize: "var(--font-size-xl)",
                  marginBottom: "2rem",
                }}
                tabIndex={0}
              >
                My Experience
              </h2>

              <Card style={cardStyle}>
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title as="h3" style={cardTitleStyle}>
                    Application Support Specialist{" "}
                    <span style={{ color: "#6366F1", fontWeight: 500 }}>
                      @ Washington University in St. Louis
                    </span>
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      fontStyle: "italic",
                      color: "#6B7280",
                      fontWeight: 300,
                      fontSize: "var(--font-size-sm)",
                      marginBottom: "1rem",
                    }}
                  >
                    Jun 2024 – Present
                  </Card.Subtitle>
                  <ul style={{ paddingLeft: "1.2rem", color: "#4B5563" }}>
                    <li>
                      Provided expert technical support for university business
                      systems, enhancing operational continuity.
                    </li>
                    <li>
                      Thoroughly documented issues, solutions, and training
                      procedures to support scalable knowledge sharing.
                    </li>
                    <li>
                      Acted as a subject matter expert and key escalation point
                      for IT-related issues across departments.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card style={cardStyle}>
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title as="h3" style={cardTitleStyle}>
                    Training Representative Support{" "}
                    <span style={{ color: "#6366F1", fontWeight: 500 }}>
                      @ University of Missouri
                    </span>
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      fontStyle: "italic",
                      color: "#6B7280",
                      fontWeight: 300,
                      fontSize: "var(--font-size-sm)",
                      marginBottom: "1rem",
                    }}
                  >
                    Jul 2023 – Jun 2024
                  </Card.Subtitle>
                  <ul
                    style={{
                      paddingLeft: "1.2rem",
                      color: "#4B5563",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <li>
                      Supervised and mentored a 15-person team, fostering a
                      positive and inclusive work environment.
                    </li>
                    <li>
                      Led one-on-one onboarding sessions to accelerate new hire
                      readiness.
                    </li>
                    <li>
                      Developed detailed performance evaluations to guide team
                      growth and improvement.
                    </li>
                  </ul>

                  <Card.Title as="h3" style={cardTitleStyle}>
                    User Support Analyst
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      fontStyle: "italic",
                      color: "#6B7280",
                      fontWeight: 300,
                      fontSize: "var(--font-size-sm)",
                      marginBottom: "1rem",
                    }}
                  >
                    Apr 2022 – Jul 2023
                  </Card.Subtitle>
                  <ul style={{ paddingLeft: "1.2rem", color: "#4B5563" }}>
                    <li>
                      Administered Azure AD and O365 licenses, managing secure
                      configurations and access controls.
                    </li>
                    <li>
                      Oversaw Apple device compliance using Jamf, performing
                      remote updates and audits.
                    </li>
                    <li>
                      Resolved software, hardware, and network issues for 20+
                      users daily with 98% satisfaction.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card style={cardStyle}>
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title as="h3" style={cardTitleStyle}>
                    Video Engineering Intern{" "}
                    <span style={{ color: "#6366F1", fontWeight: 500 }}>
                      @ Fox Corporation
                    </span>
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      fontStyle: "italic",
                      color: "#6B7280",
                      fontWeight: 300,
                      fontSize: "var(--font-size-sm)",
                      marginBottom: "1rem",
                    }}
                  >
                    Summer 2022
                  </Card.Subtitle>
                  <ul style={{ paddingLeft: "1.2rem", color: "#4B5563" }}>
                    <li>
                      Automated AWS workflows using Go, significantly reducing
                      manual intervention and improving uptime.
                    </li>
                    <li>
                      Improved database visibility by integrating vendor APIs
                      using Python and SQL.
                    </li>
                    <li>
                      Tracked project progress and deliverables using Jira,
                      ensuring timely and organized execution.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "var(--font-size-xl)",
                  marginBottom: "2rem",
                }}
                tabIndex={0}
              >
                Education
              </h2>

              <Card style={cardStyle}>
                <Card.Body style={{ padding: 0 }}>
                  <Card.Title as="h3" style={cardTitleStyle}>
                    Bachelor of Science in Information Technology{" "}
                    <span style={{ color: "#6366F1", fontWeight: 500 }}>
                      @ University of Missouri – Columbia
                    </span>
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      fontStyle: "italic",
                      color: "#6B7280",
                      fontWeight: 300,
                      fontSize: "var(--font-size-sm)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Graduated 2024
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          )}
        </InView>
      </Container>
    </section>
  );
}
