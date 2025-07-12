"use client";

import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { Button, FileInput, Grid, Group, Paper, Select, TextInput, Title } from "@mantine/core";
import { CreateStudentInput, createStudentSchema } from "@/lib/schema";
import { createStudent } from "@/lib/api";

export function CreateStudentForm() {
const form = useForm<CreateStudentInput>({
    mode: 'uncontrolled',
    validate: (values) => {
        const result = createStudentSchema.safeParse(values);
        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            console.error("err faced", Object.entries(errors));
            return errors;
        }
        return {};
    },
    initialValues: {
        firstName: "",
        lastName: "",
        gender: "Male",
        fatherName: "",
        motherName: "",
        dateOfBirth: new Date(), 
        adhaarNumber: "",
        address: "",
        parentEmail: "",
        parentPhone: "",
        admissionNumber: "",
        admissionDate: new Date(),
        photoFile: undefined,
        sectionId: 1,
        academicYearId: 1,
    },
});

    async function validate_and_process(form : any) {
        createStudentSchema.parse(form);
        let res = await createStudent;
        return res
    }

    const createStudentMutation = useMutation({
        mutationFn: createStudent,
        onSuccess: () => {
            console.log("done");
            form.reset();
        },
        onError: (error) => {
            console.error("err:", error);
        },
    });

    return (
        <Paper withBorder shadow="md" p="xl" radius="md">
            <Title order={2} mb="xl">
                Student Information
            </Title>
            <form
                onSubmit={form.onSubmit((values) => createStudentMutation.mutate(values))}
            >
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput label="First Name" placeholder="Student's first name" withAsterisk {...form.getInputProps('firstName')} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput label="Last Name" placeholder="Student's last name" withAsterisk {...form.getInputProps('lastName')} />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput label="Father's Name" placeholder="Father's full name" withAsterisk {...form.getInputProps('fatherName')} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput label="Mother's Name" placeholder="Mother's full name" withAsterisk {...form.getInputProps('motherName')} />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Select label="Gender" withAsterisk data={['Male', 'Female', 'Others']} {...form.getInputProps('gender')} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Date />
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput type="number" label="Aadhaar Number" placeholder="12 digit Aadhaar number" withAsterisk {...form.getInputProps('adhaarNumber')} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput label="Admission Number" placeholder="Unique admission number" withAsterisk {...form.getInputProps('admissionNumber')} />
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput label="Parent's Email" placeholder="parent@example.com" withAsterisk {...form.getInputProps('parentEmail')} />
                    </Grid.Col>
                     <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput label="Parent's Phone" placeholder="10 digit mobile number" withAsterisk {...form.getInputProps('parentPhone')} />
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <TextInput label="Address" placeholder="123 Main St, Anytown" withAsterisk {...form.getInputProps('address')} />
                    </Grid.Col>
                    
                    <Grid.Col span={12}>
                        <FileInput
                            label="Student Photo"
                            placeholder="Click to upload a photo"
                            accept="image/png,image/jpeg"
                            {...form.getInputProps('photoFile')}
                        />
                         {form.values.photoFile && (
                            <Group mt="sm">
                                <p style={{fontSize: "0.9rem"}}>Preview</p>
                                <img src={URL.createObjectURL(form.values.photoFile)} alt="Photo preview" style={{ width: '75px', height: '75px', borderRadius: 'var(--mantine-radius-md)', objectFit: 'cover', border: "1px solid black" }} />
                            </Group>
                        )}
                    </Grid.Col>
                </Grid>

                <Group justify="flex-end" mt="xl">
                    <Button type="submit" size="md" loading={createStudentMutation.isPending}>
                        Create Student
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}