import {
  TextInput,
  Select,
  Grid,
  GridCol,
  Paper,
  Title,
  Divider,
} from "@mantine/core";

export default function ParentDetails({ form }: { form: any }) {
  return (
    <Paper p="md" radius="md" shadow="xs" withBorder>
    
      <Divider mb="md" />

      <Grid gutter="lg">
        {/* Row 1 */}
        <GridCol span={4}>
          <TextInput
            label="Father Name"
            placeholder="Enter"
            radius="md"
            styles={{
              input: {
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                  fontWeight: 300,
                },
              },
            }}
            {...form.getInputProps("fatherName")}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Mother Name"
            placeholder="Enter"
            radius="md"
            styles={{
              input: {
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                  fontWeight: 300,
                },
              },
            }}
            {...form.getInputProps("motherName")}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter"
            radius="md"
            styles={{
              input: {
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                  fontWeight: 300,
                },
              },
            }}
            {...form.getInputProps("email")}
          />
        </GridCol>

        {/* Row 2 */}
        <GridCol span={4}>
          <TextInput
            label="Phone Number 1"
            placeholder="Enter"
            radius="md"
            styles={{
              input: {
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                },
              },
            }}
            {...form.getInputProps("phoneNumber1")}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Phone Number 2"
            placeholder="Enter"
            radius="md"
            styles={{
              input: {
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                },
              },
            }}
            {...form.getInputProps("phoneNumber2")}
          />
        </GridCol>

        <GridCol span={4}>
          <Select
            label="Gender"
            placeholder="Select gender"
            data={["Male", "Female"]}
            radius="md"
            styles={{
              input: {
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                },
              },
            }}
            {...form.getInputProps("parentGender")}
          />
        </GridCol>
      </Grid>
    </Paper>
  );
}