import React from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6"; // Import the toggle icons
import { useTheme } from "./HeaderClient";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="flex flex-col items-center justify-center">
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