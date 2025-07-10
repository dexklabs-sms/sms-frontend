"use client";

import { Badge, Button, Paper, Stack, TextInput } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "var(--mantine-spacing-md)" }}>
      <Paper withBorder p={"xl"} maw={300}>
        <Stack>
          <div>
            <a href={"/auth/logout"}>Logout</a>
          </div>

          <div>
            <Button component={Link} href={"/students"}>
              To Students
            </Button>
          </div>

          <TextInput
            label={"First Name"}
            placeholder={"Enter your first name"}
          />

          <Badge>Badge</Badge>
        </Stack>
      </Paper>
    </div>
  );
}
