"use client";
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faS, faSun } from "@fortawesome/free-solid-svg-icons";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useState(faMoon);
  const updateTheme = () => {
    setIcon(theme.mode === "light" ? faSun : faMoon);
    setTheme({ ...theme, mode: theme.mode === "light" ? "dark" : "light" });
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={updateTheme}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
      <span className="ml-4 w-5">
        <FontAwesomeIcon icon={icon} size="lg" />
      </span>
    </label>
  );
};

export default ToggleTheme;
