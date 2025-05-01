"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/ProjectShowcase";
import ContactIcons from "./components/ContactIcons";
import IntroSplash from "./components/IntroSplash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      {showSplash ? (
        <IntroSplash />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <ContactIcons />
        </motion.div>
      )}
    </Layout>
  );
}
