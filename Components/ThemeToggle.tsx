"use client";
import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // This physically attaches data-theme="dark" to the <html> tag
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="btn btn-circle btn-primary shadow-lg"
      >
        {theme === "light" ? (
          <FiMoon className="w-6 h-6" /> // Show moon so user knows they can switch to dark
        ) : (
          <IoMdSunny className="w-6 h-6" /> // Show sun so user knows they can switch to light
        )}
      </button>
    </div>
  );
}
