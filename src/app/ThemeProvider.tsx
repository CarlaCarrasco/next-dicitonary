"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState({
    mode: "light",
    fontFamily: "sans-serif",
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
