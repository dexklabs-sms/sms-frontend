import { Badge, Button, Paper, Stack, TextInput } from "@mantine/core";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <Paper withBorder p={"xl"} maw={300}>
        <Stack>
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
