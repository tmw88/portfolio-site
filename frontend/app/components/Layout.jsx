"use client";

import { useEffect, useState } from "react";
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
import FloatingContact from "./FloatingContact.js";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
        expand="lg"
        fixed="top"
        className={`transition-navbar 
          ${scrolled ? "navbar-scrolled" : ""} 
          ${showNavbar ? "navbar-show" : "navbar-hide"}`}
      >
        <Container>
          <NavbarBrand className="nav-brand" href="#">
            TW
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {["about", "experience", "projects", "contact"].map((section) => (
                <NavLink
                  key={section}
                  href={`#${section}`}
                  className="nav-link-custom"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              ))}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <main style={{ paddingTop: "80px" }}>{children}</main>
      <FloatingContact />
    </div>
  );
}
