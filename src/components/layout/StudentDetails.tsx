import {
  TextInput,
  Select,
  Grid,
  GridCol,
  Paper,
  Divider,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";

export default function StudentDetails({ form }: { form: any }) {
  return (
    <Paper p="md" radius="md" shadow="xs" withBorder>
      <Divider mb="md" />

      <Grid gutter="lg">
        {/* Row 1 */}
        <GridCol span={4}>
          <TextInput
            label="First Name"
            placeholder="Enter"
            radius="md"
            required
            styles={{
              input: {
                fontWeight: 400,
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                  fontWeight: 300,
                },
              },
            }}
            {...form.getInputProps("firstName")}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Last Name"
            placeholder="Enter"
            radius="md"
            required
            styles={{
              input: {
                fontWeight: 400,
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                  fontWeight: 300,
                },
              },
            }}
            {...form.getInputProps("lastName")}
          />
        </GridCol>

        <GridCol span={4}>
          <DateInput
            label="Date of Birth"
            placeholder="Select date"
            required
            radius="md"
            size="sm"
            valueFormat="DD MMM YYYY"
            hideOutsideDates
            dropdownType="popover"
            popoverProps={{
              shadow: "md",
              offset: 4,
              withinPortal: true,
            }}
            styles={{
              input: {
                border: "1px solid #ced4da",
                fontSize: "13px",
                fontWeight: 400,
                "::placeholder": {
                  color: "#adb5bd",
                  fontWeight: 300,
                },
              },
              calendar: {
                width: 260,
                backgroundColor: "#f9f9f9",
                fontSize: "13px",
                padding: "8px",
              },
              calendarHeader: {
                padding: "6px 8px",
                backgroundColor: "#f1f3f5",
                fontWeight: 500,
              },
              day: {
                height: 28,
                width: 28,
                borderRadius: 6,
                fontSize: "12px",
                "&[data-selected]": {
                  backgroundColor: "#212529",
                  color: "white",
                },
                "&:hover": {
                  backgroundColor: "#dee2e6",
                },
              },
            }}
            {...form.getInputProps("dob")}
          />
        </GridCol>

        {/* Row 2 */}
        <GridCol span={4}>
          <TextInput
            label="Section"
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
            {...form.getInputProps("section")}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Class"
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
            {...form.getInputProps("class")}
          />
        </GridCol>

        <GridCol span={4}>
          <Select
            label="Gender"
            placeholder="Enter"
            data={["Male", "Female", "Other"]}
            radius="md"
            styles={{
              input: {
                border: "1px solid #ced4da",
                "::placeholder": {
                  color: "#adb5bd",
                },
              },
            }}
            {...form.getInputProps("gender")}
          />
        </GridCol>

        {/* Row 3 */}
        <GridCol span={5}>
          <TextInput
            label="Aadhar No."
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
            {...form.getInputProps("aadharNo")}
          />
        </GridCol>

        <GridCol span={5}>
          <TextInput
            label="Address"
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
            {...form.getInputProps("address")}
          />
        </GridCol>
      </Grid>
    </Paper>
  );
}