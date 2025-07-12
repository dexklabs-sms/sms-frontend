'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Button, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';


const navLinks = [
    { name: "Students", href: "/students", icon: "🎈" },
    { name: "Create Student", href: '/create-student', icon: "+" },
    { name: 'Classes', href: '/classes', icon: "🚄" },
    { name: 'Fee Registry', href: '/fee-registry', icon: "💸" }
];

export function AppNavbar() {
    const pathname = usePathname();

    return (
        <Box component={"nav"} py={"md"} px={"md"}>
            <Link href="/" passHref>
                <Button
                    size={"lg"}
                    px={"xs"}
                    fullWidth
                    justify={"left"}
                    variant={"subtle"}
                >
                    <MantineLogo style={{ width: 120 }} />
                </Button>
            </Link>

            <Stack mt={"xl"} justify={"left"}>
                <Text px={"xs"} size={"sm"} fw={600} c={"gray"}>
                    Platform
                </Text>

                <Stack gap={2}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link key={link.href} href={link.href} passHref>
                                <Button
                                    justify={"left"}
                                    px={"xs"}
                                    variant={isActive ? "light" : "subtle"}
                                    c={isActive ? "primary" : "gray"}
                                >
                                    {`${link.icon} ${link.name}`}
                                </Button>
                            </Link>
                        );
                    })}
                </Stack>
            </Stack>
        </Box>
    );
}