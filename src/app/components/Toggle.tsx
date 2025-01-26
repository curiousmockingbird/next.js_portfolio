import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6"; // Import the toggle icons

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

  // Determine image source based on theme
  const imageSrc = theme === "dark" ? "/hm.svg" : "/hm_black.svg";

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Pass the dynamically determined imageSrc to Header */}
      <Header imageSrc={imageSrc} />
      <button
        onClick={handleToggle}
        aria-label="Toggle Light/Dark Theme"
        className="flex items-center justify-center p-2 rounded-md text-xl focus:outline-none"
      >
        {theme === "light" ? (
          <FaToggleOn className="text-green-500 text-4xl" />
        ) : (
          <FaToggleOff className="text-gray-500 text-4xl" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
