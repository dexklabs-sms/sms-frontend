import {
  Box,
  Button,
  Stack,
  Text,
  ThemeIcon,
  Group,
} from "@mantine/core";
import {
  IconLayoutDashboard,
  IconUserPlus,
  IconUsers,
  IconTrain,
  IconCurrencyRupee,
  IconMessage,
  IconHelp,
  IconBuildingCommunity,
} from "@tabler/icons-react";

export function AppNavbar() {
  const navItems = [
    { label: "Dashboard", icon: IconLayoutDashboard },
    { label: "Create Student", icon: IconUserPlus, highlight: true },
    { label: "Students", icon: IconUsers },
    { label: "Classes", icon: IconTrain },
    { label: "Fee Registry", icon: IconCurrencyRupee },
  ];

  const footerItems = [
    { label: "Support", icon: IconHelp },
    { label: "Feedback", icon: IconMessage },
  ];

  return (
    <Box
      py="xs"
      pl="xs"
      style={{
        width: 240,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      {/* Top Section */}
      <Box>
        {/* Brand Section */}
        <Button
          size="lg"
          px="xs"
          fullWidth
          justify="left"
          variant="subtle"
          radius="md"
        >
          <Group>
            <ThemeIcon size={24} radius="xl" variant="light" color="black">
              <IconBuildingCommunity size={16} />
            </ThemeIcon>
            <Text fw={700} size="lg" c="black">
              SMS Inc.
            </Text>
          </Group>
        </Button>

        {/* Navigation */}
        <Stack mt="xl" gap="xs">
          <Text px="xs" size="sm" fw={600} c="black">
            Platform
          </Text>

          <Stack gap={4}>
            {navItems.map(({ label, icon: Icon, highlight }) => (
              <Button
                key={label}
                variant="subtle"
                fullWidth={!highlight}
                justify="left"
                radius="md"
                size={highlight ? "xs" : "sm"}
                px="xs"
                style={{
                  fontWeight: 500,
                  color: highlight ? "white" : "black",
                  backgroundColor: highlight ? "#000" : undefined,
                  width: highlight ? 180 : "100%",
                }}
                leftSection={
                  <ThemeIcon
                    size={20}
                    variant="light"
                    color={highlight ? "white" : "black"}
                  >
                    <Icon size={16} />
                  </ThemeIcon>
                }
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Box>

      {/* Bottom Section */}
      <Stack gap={4} px="xs" mb="xs">
        {footerItems.map(({ label, icon: Icon }) => (
          <Button
            key={label}
            variant="subtle"
            fullWidth
            justify="left"
            radius="md"
            style={{ color: "black" }}
            leftSection={
              <ThemeIcon size={20} variant="light" color="black">
                <Icon size={16} />
              </ThemeIcon>
            }
          >
            {label}
          </Button>
        ))}

        {/* Signature Block */}
        <Box pt="sm" style={{ borderTop: "1px solid #e9ecef" }}>
          <Text size="xs" c="dimmed">
            📧 nida@example.com
          </Text>
          <Text size="xs" fw={500}>
            Made by Nida
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}