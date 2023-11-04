"use client";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
const ToggleFont = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  const updateFont = (font: string) => {
    console.log({ font });
    setTheme({ mode: theme.mode, fontFamily: font });
  };
  return (
    <>
      <select className="text-2xl" onChange={(e) => updateFont(e.target.value)}>
        <option value="san-serif" className="text-2lg">
          San-serif
        </option>
        <option value="serif" className="text-2lg">
          Serif
        </option>
      </select>
    </>
  );
};

export default ToggleFont;
