"use client"; // Required for interactive components in Next.js App Router
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutMe = () => {
  const fadeInSection = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <Container className="mt-5" id="about">
      <motion.div {...fadeInSection}>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center">About Me</h2>
            <p>
              I am a passionate full-stack developer with experience in building
              scalable applications using modern technologies like Node.js,
              React, Next.js, and more. My focus is on creating user-friendly,
              high-performance websites and applications. I enjoy solving
              problems and continuously learning to keep up with industry
              trends.
            </p>
            <div className="d-flex justify-content-center">
              <Button variant="outline-primary" href="#contact">
                Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default AboutMe;
