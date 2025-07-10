import { Box, Button, Group, Stack, Text } from "@mantine/core";

import { MantineLogo } from "@mantinex/mantine-logo";

export function AppNavbar() {
  const btns = ["🍔 Dashboard", "🎈 Students", "🚄 Classes", "💸 Fee Registry"];

  return (
    <Box component={"div"} py={"xs"} pl={"xs"}>
      <Button
        size={"lg"}
        px={"xs"}
        fullWidth
        justify={"left"}
        variant={"subtle"}
      >
        <MantineLogo style={{ width: 120 }} />
      </Button>

      <Stack mt={"xl"} justify={"left"}>
        <Text px={"xs"} size={"sm"} fw={600} c={"gray"}>
          Platform
        </Text>

        <Stack gap={2}>
          {btns.map((btn) => (
            <Button key={btn} justify={"left"} px={"xs"} variant={"subtle"}>
              {btn}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
