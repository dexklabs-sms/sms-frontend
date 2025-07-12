import {
  Container,
  Paper,
  Title,
  Select,
  Button,
  Group,
  Notification,
  Stack,
  Flex,
  Box,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconUpload, IconUser } from "@tabler/icons-react";

import StudentDetails from "@/components/layout/StudentDetails";
import ParentDetails from "@/components/layout/ParentDetails";
import EmergencyDetails from "@/components/layout/EmergencyDetails";

import { useForm, zodResolver } from "@mantine/form";
import { studentSchema } from "@/lib/schema";
import { useSubmitForm } from "@/hooks/useSubmitForm";

const academicYears = ["2023–2024", "2024–2025", "2025–2026", "2026–2027"];

export default function FormLayout() {
  const form = useForm({
    validate: zodResolver(studentSchema),
    initialValues: {
      firstName: "",
      lastName: "",
      dob: null,
      section: "",
      class: "",
      gender: "Male",
      aadharNo: "",
      address: "",
      fatherName: "",
      motherName: "",
      email: "",
      phoneNumber1: "",
      phoneNumber2: "",
      parentGender: "Male",
      guardianName: "",
      guardianPhoneNumber: "",
      admissionDate: null,
      admissionFee: 0,
      penNumber: "",
      image: [],
    },
  });

  const mutation = useSubmitForm();

  return (
    <Box style={{ flex: 1, height: "100vh", overflowY: "auto" }}>
      <Container py="xl">
        <Paper p="md" shadow="md" withBorder>
          {/* Header */}
          <Group justify="space-between" align="center" mb="md">
            {/* Title Section */}
            <Group gap="xs">
              <ThemeIcon size={28} radius="xl" color="indigo" variant="light">
                <IconUser size={20} />
              </ThemeIcon>
              <Title order={3} fw={600} c="gray.9">
                Students
              </Title>
            </Group>

            {/* Actions Section */}
            <Group gap="sm">
              <Select
                placeholder="Select Year"
                data={academicYears}
                size="sm"
                radius="md"
                style={{ width: 160 }}
                styles={{
                  input: {
                    border: "1px solid #ced4da",
                    fontWeight: 500,
                  },
                }}
              />
       <Button color="dark" size="sm" radius="md" style={{ width: 140 }}>
  Quick Create
</Button>
            </Group>
          </Group>

          {/* Form Body */}
          <form onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
            <Stack gap="md">
              {/* Student Details */}
              <Section>
                <Flex gap="md" align="flex-start">
                  {/* Photo Upload */}
                  <Box w="30%">
                    <Paper
                      p="sm"
                      radius="md"
                      shadow="xs"
                      withBorder
                      style={{ backgroundColor: "#f9fafb" }}
                    >
                      <Group justify="center" mb="sm">
                        <Text fw={600}>Student Photo</Text>
                      </Group>

                      <Dropzone
                        onDrop={(files) => form.setFieldValue("image", files)}
                        maxFiles={1}
                        accept={["image/png", "image/jpeg", "image/svg+xml", "image/gif"]}
                        styles={{
                          root: {
                            border: "2px dashed #dee2e6",
                            backgroundColor: "#fff",
                            padding: "20px",
                            textAlign: "center",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          },
                        }}
                      >
                        <Stack align="center" gap="xs">
                          <IconUpload size={30} stroke={1.5} color="#868e96" />
                          <Text size="sm" color="dimmed" ta="center">
                            <strong>Click to upload</strong>
                            <br />
                            <span style={{ fontWeight: 400 }}>
                              or drag and drop SVG, PNG, JPG, or GIF (max 800×400px)
                            </span>
                          </Text>
                        </Stack>
                      </Dropzone>
                    </Paper>
                  </Box>

                  {/* Student Form Fields */}
                  <Box style={{ flex: 1 }}>
                    <StudentDetails form={form} />
                  </Box>
                </Flex>
              </Section>

              {/* Parent Details */}
              <Section title="👨‍👩‍👧 Parent Details">
                <ParentDetails form={form} />
              </Section>

              {/* Emergency Details */}
              <Section title="🚨 Emergency Details">
                <EmergencyDetails form={form} />
              </Section>

              {/* Submit Button */}
              <Flex justify="flex-end">
                <Button
                  type="submit"
                  disabled={!form.isValid}
                  color="dark"
                  size="sm"
                  radius="md"
                  style={{ width: 120 }}
                >
                  Save
                </Button>
              </Flex>

              {/* Notifications */}
              {mutation.isSuccess && (
                <Notification color="green" title="Success">
                  Form submitted!
                </Notification>
              )}
              {mutation.isError && (
                <Notification color="red" title="Error">
                  Submission failed!
                </Notification>
              )}
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

// Reusable Section Wrapper
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Title order={6} mb={0}>
        {title}
      </Title>
      <Paper p="md" shadow="xs" withBorder radius="md">
        {children}
      </Paper>
    </>
  );
}