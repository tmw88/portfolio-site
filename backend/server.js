// backend/server.js

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const projectsRoute = require("./routes/projects");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later.",
});

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Security: Content Security Policy
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// 📬 Contact Form Route
app.post(
  "/contact",
  contactLimiter,
  [
    body("name").trim().isLength({ min: 2 }).escape(),
    body("email").isEmail().normalizeEmail(),
    body("message").trim().isLength({ min: 5 }).escape(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const { name, email, message } = req.body;
    console.log("Received contact form data:", { name, email, message });

    const sanitizedEmail = email.match(/^[\w.-]+@[\w.-]+\.\w+$/) ? email : "";

    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      let mailOptions = {
        from: `"Portfolio Contact Form" <no-reply@yourdomain.com>`,
        replyTo: sanitizedEmail,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "Error sending message. Try again later." });
    }
  }
);

// 🌐 Projects API
app.use("/api/projects", projectsRoute);
console.log("MONGODB_URI:", process.env.MONGODB_URI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
