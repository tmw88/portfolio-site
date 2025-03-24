// context/ThemeContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create a context to manage the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for system preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Default to system preference
      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(userPrefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    // Apply theme to the document body
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    // Store the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);