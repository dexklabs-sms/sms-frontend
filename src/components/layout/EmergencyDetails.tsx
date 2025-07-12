import {
  TextInput,
  Grid,
  GridCol,
  Paper,
  Title,
  Divider,
  
} from "@mantine/core";
import { DateInput } from "@mantine/dates";

export default function EmergencyDetails({ form }: { form: any }) {
  return (
    <Paper p="md" radius="md" shadow="xs" withBorder>
      
      <Divider mb="md" />

      <Grid gutter="lg">
        {/* Row 1 */}
        <GridCol span={4}>
          <TextInput
            label="Guardian Name"
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
            {...form.getInputProps("guardianName")}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Guardian Phone Number"
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
            {...form.getInputProps("guardianPhoneNumber")}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="First Name"
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
            {...form.getInputProps("firstName")}
          />
        </GridCol>

        {/* Row 2 */}
          <GridCol span={4}>
         <DateInput
  label="Admission Date"
  placeholder="Enter"
  radius="md"
  size="xs"
  dropdownType="popover"
  valueFormat="DD MMM YYYY"
  hideOutsideDates
  allowDeselect
  popoverProps={{
    shadow: "sm",
    offset: 4,
    withinPortal: true,
    trapFocus: false,
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
      width: 240,
      padding: 6,
      fontSize: "13px",
      backgroundColor: "#f8f9fa",
    },
    calendarHeader: {
      padding: "4px 8px",
      backgroundColor: "#f1f3f5",
    },
    day: {
      height: 26,
      width: 26,
      fontSize: "12px",
    },
  }}
  {...form.getInputProps("admissionDate")}
/>
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="Admission Fee"
            type="number"
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
            {...form.getInputProps("admissionFee")}
          />
        </GridCol>

        <GridCol span={4}>
          <TextInput
            label="PEN Number (optional)"
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
            {...form.getInputProps("penNumber")}
          />
        </GridCol>
      </Grid>
    </Paper>
  );
}