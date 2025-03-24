"use client"; // Required for interactive components in Next.js App Router
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
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
  );
};

export default CustomNavbar;
