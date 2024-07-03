"use client";
import { AppContextProvider } from "@/context/AppContext";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </ChakraProvider>
  );
}
