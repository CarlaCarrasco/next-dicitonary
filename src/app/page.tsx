"use client";
import Link from "next/link";
import Description from "./components/Description";
import SearchBar from "./components/SearchBar";
import "./globals.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <SearchBar />
      <Description word={theme.word} />
      <Link
        className="mt-auto underline underline-offset-4 text-purple-700"
        href="/about"
      >
        About this dictionary app
      </Link>
    </>
  );
}
