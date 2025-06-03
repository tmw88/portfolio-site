# Tristan Winship — Portfolio Website

Welcome to the source code for my personal portfolio website: [tristanwinship.com](https://tristanwinship.com). This site highlights my work, experience, and contact information as a full-stack developer.

## Features

- Clean, responsive design built with **Next.js** and **React Bootstrap**
- Floating contact form with **hCaptcha** spam protection
- Projects dynamically loaded from a backend API
- Secure deployment with **HTTPS**, **Nginx**, and **Let's Encrypt**
- Hosted on an **AWS EC2** instance with **PM2** for process management

## Tech Stack

**Frontend:**
- Next.js (App Router)
- React Bootstrap
- hCaptcha integration

**Backend:**
- Node.js with Express
- PostgreSQL (for projects and contact submissions)
- Rate-limiting and CAPTCHA validation

**Deployment:**
- AWS EC2 (Ubuntu)
- Nginx reverse proxy
- PM2 process manager
- HTTPS via Let's Encrypt (Certbot)
