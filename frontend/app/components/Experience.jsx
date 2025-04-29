"use client";

import { Container } from "react-bootstrap";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Experience() {
  return (
    <section
      id="experience"
      className={lato.className}
      style={{
        padding: "80px 0",
        backgroundColor: "#E5E7EB",
        color: "#1F2937", // Slightly softer than black
      }}
    >
      <Container>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "var(--font-size-xl)",
            marginBottom: "2rem",
          }}
        >
          My Experience
        </h2>

        <div style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h5
              style={{
                color: "#1F2937",
                fontWeight: 600,
                fontSize: "var(--font-size-lg)",
              }}
            >
              Frontend Developer{" "}
              <span
                style={{
                  color: "#6366F1",
                  fontWeight: 500,
                  fontSize: "var(--font-size-base)",
                }}
              >
                @ Freelance
              </span>
            </h5>
            <p
              style={{
                fontStyle: "italic",
                color: "#6B7280",
                fontWeight: 300,
                fontSize: "var(--font-size-sm)",
              }}
            >
              Jan 2023 – Present
            </p>
            <ul
              style={{
                paddingLeft: "1.2rem",
                color: "#4B5563",
                fontSize: "var(--font-size-base)",
              }}
            >
              <li>
                Built responsive web applications using React and Bootstrap.
              </li>
              <li>Worked with clients to deliver tailored UI/UX solutions.</li>
              <li>Integrated REST APIs and optimized performance.</li>
            </ul>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h5
                style={{
                  color: "#1F2937",
                  fontWeight: 600,
                  fontSize: "var(--font-size-lg)",
                }}
              >
                User Support Analyst{" "}
                <span
                  style={{
                    color: "#6366F1",
                    fontWeight: 500,
                    fontSize: "var(--font-size-base)",
                  }}
                >
                  @ MU Division of IT
                </span>
              </h5>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#6B7280",
                  fontWeight: 300,
                  fontSize: "var(--font-size-sm)",
                }}
              >
                Jan 2023 – Present
              </p>
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  color: "#4B5563",
                  fontSize: "var(--font-size-base)",
                }}
              >
                <li>
                  Tested web applications for accessibiliy and complinace.
                </li>
                <li>
                  Worked with clients to deliver tailored UI/UX solutions.
                </li>
                <li>Integrated REST APIs and optimized performance.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h5
                style={{
                  color: "#1F2937",
                  fontWeight: 600,
                  fontSize: "var(--font-size-lg)",
                }}
              >
                Univeristy of Missouri🐯{" "}
                <span
                  style={{
                    color: "#6366F1",
                    fontWeight: 500,
                    fontSize: "var(--font-size-base)",
                  }}
                >
                  B.S. Information Technology
                </span>
              </h5>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#6B7280",
                  fontWeight: 300,
                  fontSize: "var(--font-size-sm)",
                }}
              >
                May 2024
              </p>
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  color: "#4B5563",
                  fontSize: "var(--font-size-base)",
                }}
              >
                <li>Certificate in Web Application Development</li>
                <li>Certificate in Cybersecurity</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
