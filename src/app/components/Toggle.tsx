import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    }
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Update body class
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);

    // Save preference to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="theme-toggle flex flex-col items-center justify-center">
      <Header/>
      <label className="toggle">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={handleToggle}
          aria-label="Toggle Light/Dark Theme"
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
