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
      <body className={`${theme.mode}`}>
        <main
          id="main"
          className={`flex min-h-screen flex-col items-center p-24 ${theme.fontFamily}`}
        >
          {children}
        </main>
      </body>
    </QueryClientProvider>
  );
};

export default Main;
