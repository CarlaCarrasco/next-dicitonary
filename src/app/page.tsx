"use client";
import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { ThemeContext } from "./ThemeProvider";
import "./globals.css";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <main
        id="main"
        className={`flex min-h-screen flex-col items-center p-24 ${theme.fontFamily}`}
      >
        <Navbar />
        <SearchBar />
        <Description />
        <Link href="about">About the dictionary app</Link>
      </main>
    </QueryClientProvider>
  );
}
