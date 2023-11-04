"use client";
import { useContext } from "react";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { ThemeContext } from "./ThemeProvider";
import "./globals.css";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      id="main"
      className={`flex min-h-screen flex-col items-center p-24 ${theme.fontFamily}`}
    >
      <Navbar />
      <SearchBar />
      <Description />
      <h1>Dictionary App</h1>
    </main>
  );
}
