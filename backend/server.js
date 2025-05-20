// backend/server.js

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
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

app.use((req, res, next) => {
  if (req.path.substr(-1) === "/" && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    res.redirect(301, req.path.slice(0, -1) + query);
  } else {
    next();
  }
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later.",
});

app.use(helmet());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.noSniff());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none'; base-uri 'none';"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.post(
  "/contact",
  contactLimiter,
  [
    body("name").isString().trim().isLength({ min: 2, max: 100 }).escape(),
    body("email").isEmail().normalizeEmail(),
    body("message").isString().trim().isLength({ min: 5, max: 1000 }).escape(),
    body("captchaToken").isString().notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const { name, email, message, captchaToken } = req.body;

    if (process.env.NODE_ENV === "development") {
      console.log("Received contact form data:", {
        name,
        email,
        message,
        captchaToken,
      });
    }

    try {
      const verifyRes = await fetch("https://hcaptcha.com/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.HCAPTCHA_SECRET_KEY,
          response: captchaToken,
        }),
      });

      const hcaptchaResult = await verifyRes.json();

      if (!hcaptchaResult.success) {
        console.warn("hCaptcha failed:", hcaptchaResult["error-codes"]);
        return res.status(403).json({ error: "Captcha verification failed." });
      }
    } catch (captchaError) {
      console.error("Captcha verification error:", captchaError);
      return res
        .status(500)
        .json({ error: "Captcha verification failed. Try again." });
    }

    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const sanitizedMessage = message
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      let mailOptions = {
        from: `"Portfolio Contact Form" <no-reply@yourdomain.com>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${sanitizedMessage}`,
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

app.use("/api/projects", projectsRoute);

if (process.env.NODE_ENV === "development") {
  console.log("MONGODB_URI:", process.env.MONGODB_URI);
}

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
