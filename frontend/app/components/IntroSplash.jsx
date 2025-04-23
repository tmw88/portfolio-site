// components/IntroSplash.jsx
"use client";
import { motion } from "framer-motion";

const IntroSplash = () => {
  return (
    <motion.div
      className="intro-splash"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="intro-title"
      >
        TW
      </motion.h1>
    </motion.div>
  );
};

export default IntroSplash;
