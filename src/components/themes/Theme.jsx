import { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { themes } from "../../Data";
import ThemeItem from "./ThemeItem";

// Load saved color or default
const getInitialColor = () => localStorage.getItem("color") || "240";

// Load saved theme mode or default to light
const getInitialMode = () => localStorage.getItem("mode") || "light";

const Theme = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getInitialColor);
  const [mode, setMode] = useState(getInitialMode);

  // Apply color and save it
  useEffect(() => {
    document.documentElement.style.setProperty("--hue", color);
    localStorage.setItem("color", color);
  }, [color]);

  // Apply mode and save it
  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("mode", mode);
  }, [mode]);

  // Change color handler
  const changeColor = (selectedHue) => {
    setColor(selectedHue);
  };

  // Toggle between dark and light mode
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className={`style-switcher ${showSwitcher ? "show-switcher" : ""}`}>
      {/* Gear Icon toggler */}
      <div className="switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
        <FaCog />
      </div>

      {/* Dark/Light Mode Toggle */}
      <div className="theme-toggler" onClick={toggleMode} style={{ cursor: "pointer" }}>
        {mode === "light" ? <BsMoon /> : <BsSun />}
      </div>

      {/* Title */}
      <h3 className="switcher-title">Style Switcher</h3>

      {/* Theme color items */}
      <div className="switcher-items grid">
        {themes.map((theme, index) => (
          <ThemeItem
            key={index}
            hue={theme.hue}
            img={theme.img}
            changeColor={changeColor}
          />
        ))}
      </div>

      {/* Close button */}
      <div className="switcher-close" onClick={() => setShowSwitcher(false)}>
        &times;
      </div>
    </div>
  );
};

export default Theme;
