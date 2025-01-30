import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the theme to the document body class
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the selected theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div className="w-full max-w-xl p-8 bg-white bg-opacity-60 shadow-lg rounded-3xl text-center backdrop-blur-lg">
        <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Theme Switcher
        </h2>
        <button
          onClick={toggleTheme}
          className={`px-5 py-2 rounded-xl font-semibold shadow-md text-xl transition ${
            theme === "light"
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-yellow-400 text-white hover:bg-yellow-500"
          }`}
        >
          {/* Button text changes based on the theme */}
          {theme === "light" ? "🌙 Switch to Dark Mode" : "☀ Switch to Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
