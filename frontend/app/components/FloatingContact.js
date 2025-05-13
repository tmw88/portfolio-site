"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import "./FloatingContact.css";

const SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const FloatingContact = ({ show, handleOpen, handleClose, showAnimated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [responseMessage, setResponseMessage] = useState("");
  const closeButtonRef = useRef(null);
  const cooldownSeconds = 30;

  useEffect(() => {
    if (show && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [show]);

  useEffect(() => {
    let interval;
    if (cooldown > 0) {
      interval = setInterval(
        () => setCooldown((prev) => Math.max(prev - 1, 0)),
        1000
      );
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      if (!window.hcaptcha) {
        setResponseMessage("Captcha failed to load. Please try again.");
        setLoading(false);
        return;
      }

      const token = await window.hcaptcha.execute(SITE_KEY, { async: true });

      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken: token }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setCooldown(cooldownSeconds);
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
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
        >
          <motion.button
            key="toggle-contact"
            className="contact-button"
            onClick={show ? handleClose : handleOpen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={show ? "Close Contact Form" : "Contact Me"}
            aria-label={show ? "Close Contact Form" : "Open Contact Form"}
            aria-expanded={show}
            aria-controls="floating-contact-form"
          >
            {show ? <X size={24} /> : <Mail size={24} />}
          </motion.button>

          <AnimatePresence>
            {show && (
              <motion.div
                id="floating-contact-form"
                className="contact-form"
                key="contact-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                role="region"
                aria-labelledby="contact-form-heading"
              >
                <button
                  className="close-button"
                  onClick={handleClose}
                  aria-label="Close contact form"
                  ref={closeButtonRef}
                >
                  <X size={18} />
                </button>
                <h3 id="contact-form-heading">Lets Work Together!</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <small id="name-error" className="field-error">
                      {errors.name}
                    </small>
                  )}

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <small id="email-error" className="field-error">
                      {errors.email}
                    </small>
                  )}

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <small id="message-error" className="field-error">
                      {errors.message}
                    </small>
                  )}

                  <div
                    className="h-captcha"
                    data-sitekey={SITE_KEY}
                    data-size="invisible"
                  ></div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={loading || cooldown > 0}
                    aria-busy={loading}
                  >
                    {loading
                      ? "Sending..."
                      : cooldown > 0
                      ? `Please wait ${cooldown}s`
                      : "Send"}
                  </button>
                </form>
                {responseMessage && (
                  <p
                    aria-live="polite"
                    className="response-message"
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
