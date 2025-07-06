"use client";

import { Badge, Button, Paper, Stack, TextInput } from "@mantine/core";
import { useEffect } from "react";
import { axiosAuthenticatedClient } from "@/lib/axios";

export default function Home() {
  useEffect(() => {
    axiosAuthenticatedClient
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.data)
      .then(console.log);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <Paper withBorder p={"xl"} maw={300}>
        <Stack>
          <div>
            <a href={"/auth/logout"}>Logout</a>
          </div>

          <div>
            <Button> Click Me </Button>
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
