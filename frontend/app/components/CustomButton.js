"use client";

import { Button } from "react-bootstrap";

const CustomButton = ({ children, href = "#" }) => {
  return (
    <Button
      href={href}
      target={href?.startsWith("http") ? "_blank" : "_self"}
      className={`custom-button`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
