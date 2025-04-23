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
  const [showAnimatedNavbar, setShowAnimatedNavbar] = useState(false); // ⬅️ New state

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimatedNavbar(true); // ⬅️ Show after delay
    }, 4000); // Match hero shimmer

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
            backgroundColor: scrolled ? "#ffffff" : "transparent",
            boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.05)" : "none",
            transition: "all 0.3s ease",
            backdropFilter: "blur(8px)",
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

      <main style={{ paddingTop: "80px" }}>{children}</main>

      <FloatingContact
        show={showContactModal}
        handleOpen={() => setShowContactModal(true)}
        handleClose={() => setShowContactModal(false)}
        showAnimated={showAnimatedNavbar}
      />
    </div>
  );
}
