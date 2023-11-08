"use client";
import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContext } from "../ThemeProvider";

const Main = ({ children }) => {
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
        {children}
      </main>
    </QueryClientProvider>
  );
};

export default Main;
