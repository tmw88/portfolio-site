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
            color: "#FFFFF", // Indigo heading
            fontWeight: 700,
            fontSize: "1.8rem",
            marginBottom: "2rem",
          }}
        >
          Where I've Worked
        </h2>
        <div style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h5 style={{ color: "#1F2937", fontWeight: 600 }}>
              Frontend Developer{" "}
              <span style={{ color: "#6366F1", fontWeight: 500 }}>
                @ Freelance
              </span>
            </h5>
            <p
              style={{
                fontStyle: "italic",
                color: "#6B7280",
                fontWeight: 300,
              }}
            >
              Jan 2023 – Present
            </p>
            <ul style={{ paddingLeft: "1.2rem", color: "#4B5563" }}>
              <li>
                Built responsive web applications using React and Bootstrap.
              </li>
              <li>Worked with clients to deliver tailored UI/UX solutions.</li>
              <li>Integrated REST APIs and optimized performance.</li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h5 style={{ color: "#1F2937", fontWeight: 600 }}>
              Intern Developer{" "}
              <span style={{ color: "#6366F1", fontWeight: 500 }}>
                @ Startup Inc
              </span>
            </h5>
            <p
              style={{
                fontStyle: "italic",
                color: "#6B7280",
                fontWeight: 300,
              }}
            >
              Jun 2022 – Dec 2022
            </p>
            <ul style={{ paddingLeft: "1.2rem", color: "#4B5563" }}>
              <li>
                Contributed to a React-based dashboard for internal analytics.
              </li>
              <li>
                Improved accessibility and responsiveness across browsers.
              </li>
              <li>Collaborated with a team using Git and Agile practices.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
