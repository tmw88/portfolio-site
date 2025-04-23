"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import "./FloatingContact.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const FloatingContact = ({ show, handleOpen, handleClose, showAnimated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {showAnimated && (
        <motion.div
          className="floating-contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Floating Mail Button */}
          <motion.button
            key="toggle-contact"
            className="contact-button"
            onClick={show ? handleClose : handleOpen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {show ? <X size={24} /> : <Mail size={24} />}
          </motion.button>

          {/* Contact Form */}
          <AnimatePresence>
            {show && (
              <motion.div
                className="contact-form"
                key="contact-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <button className="close-button" onClick={handleClose}>
                  <X size={18} />
                </button>
                <h3>Contact Me</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
                {responseMessage && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: responseMessage
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;"),
                    }}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;
