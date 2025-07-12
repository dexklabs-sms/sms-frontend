// src/app/page.tsx

"use client";

import { Flex } from "@mantine/core";
import { theme } from "@/theme/theme";


import FormLayout from "../components/layout/FormLayout";
import { AppNavbar } from "@/components/layout/NavBar";

export default function Page() {
  return (
    <Flex style={{ height: "100vh" }}>
   <AppNavbar/>
      <FormLayout />
    </Flex>
  );
}
