"use client";

import { Lato } from "next/font/google";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import FloatingContact from "./FloatingContact";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div
      className={lato.className}
      style={{
        backgroundColor: "#F9FAFB",
        color: "#111827",
        minHeight: "100vh",
      }}
    >
      <Navbar
        style={{
          backgroundColor: "#6366F1",
          borderBottom: "1px solid #E5E7EB",
        }}
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <NavbarBrand
            href="#"
            style={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "1.25rem",
              letterSpacing: "0.5px",
            }}
          >
            TW
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                href="#about"
                style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About
              </NavLink>
              <NavLink
                href="#experience"
                style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Experience
              </NavLink>
              <NavLink
                href="#projects"
                style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Projects
              </NavLink>
              <NavLink
                href="#contact"
                style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contact
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <main>{children}</main>
      <FloatingContact />
    </div>
  );
}

const navLinkStyle = {
  color: "#E0E7FF",
  marginLeft: "1rem",
  fontWeight: 400,
  fontSize: "0.95rem",
  textDecoration: "none",
  transition: "color 0.3s ease",
  cursor: "pointer",
};

function handleMouseEnter(e) {
  e.target.style.color = "#FFFFFF";
}

function handleMouseLeave(e) {
  e.target.style.color = "#E0E7FF";
}
