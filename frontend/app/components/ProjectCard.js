"use client"; // Required for client-side interactions

import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <Card style={{ width: "100%", cursor: "pointer" }} className="shadow-sm">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href={link} target="_blank">
            View Project
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;