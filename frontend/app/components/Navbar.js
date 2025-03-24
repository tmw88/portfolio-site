// components/Navbar.js

import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const CustomNavbar = () => {
  const { theme, toggleTheme } = useTheme(); // Destructure theme and toggleTheme

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={theme} // Apply the theme class to the Navbar
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
            <button
              onClick={toggleTheme}
              style={{ background: "none", border: "none" }}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;