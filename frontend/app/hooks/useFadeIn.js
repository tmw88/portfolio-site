import { useState, useEffect } from "react";

const useFadeIn = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay the appearance of the main content after the intro animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  const fadeInSection = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 },
  };

  return { showContent, fadeInSection };
};

export default useFadeIn;
