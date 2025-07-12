"use client";

import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { theme } from "@/theme/theme"; 

export default function MantineClientProvider({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}