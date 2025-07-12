"use client";


import { Box, Button, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MantineLogo } from "@mantinex/mantine-logo";

const links = [
  { label: "🍔 Dashboard", href: "/" },
  { label: "🎈 Students", href: "/students" },
  { label: "➕ Create Student", href: "/students/create" },
  { label: "🚄 Classes", href: "/classes" },
  { label: "💸 Fee Registry", href: "/fees" },
];

export function AppNavbar() {
  const pathname = usePathname();

  return (
    <Box component="div" py="xs" pl="xs">
      <Button
        size="lg"
        px="xs"
        fullWidth
        justify="left"
        variant="subtle"
      >
        <MantineLogo style={{ width: 120 }} />
      </Button>

      <Stack mt="xl" justify="left">
        <Text px="xs" size="sm" fw={600} c="gray">
          Platform
        </Text>

        <Stack gap={2}>
          {links.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              justify="left"
              variant={pathname === link.href ? "light" : "subtle"}
              color={pathname === link.href ? "blue" : "gray"}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
