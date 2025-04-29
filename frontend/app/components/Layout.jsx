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
import { motion } from "framer-motion";
import FloatingContact from "./FloatingContact.js";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAnimatedNavbar, setShowAnimatedNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimatedNavbar(true); // Show after delay to match hero shimmer
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (section) => {
    if (section === "contact") {
      setShowContactModal(true);
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={lato.className}
      style={{
        backgroundColor: "#F9FAFB",
        color: "#111827",
        minHeight: "100vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={showAnimatedNavbar ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar
          expand="lg"
          fixed="top"
          className={`transition-navbar 
            ${scrolled ? "navbar-scrolled" : ""} 
            ${showNavbar ? "navbar-show" : "navbar-hide"}`}
          style={{
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 0.9)"
              : "transparent",
            boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
            backdropFilter: "blur(8px)",
            transition: "all 0.3s ease",
            borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
          }}
        >
          <Container>
            <NavbarBrand className="nav-brand" href="#">
              TW
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {["about", "experience", "projects", "contact"].map(
                  (section) => (
                    <NavLink
                      key={section}
                      href="#"
                      className="nav-link-custom"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(section);
                      }}
                      style={{
                        fontSize: "var(--font-size-sm)", // Using the CSS variable
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </NavLink>
                  )
                )}
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </motion.div>

      <main>{children}</main>

      <FloatingContact
        show={showContactModal}
        handleOpen={() => setShowContactModal(true)}
        handleClose={() => setShowContactModal(false)}
        showAnimated={showAnimatedNavbar}
      />
    </div>
  );
}
