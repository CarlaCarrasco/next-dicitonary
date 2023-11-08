// "use client";
// import { useContext } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import Description from "./components/Description";
import SearchBar from "./components/SearchBar";
// import { ThemeContext } from "./ThemeProvider";
import "./globals.css";

export default function Home() {
  // const { theme } = useContext(ThemeContext);
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: Infinity,
  //     },
  //   },
  // });

  return (
    <>
      <SearchBar />
      <Description />
      <Link href="/about">About the dictionary app</Link>
    </>
  );
}
