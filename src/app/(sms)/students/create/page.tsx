'use client';

import {
  Button,
  FileInput,
  Paper,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { z } from 'zod';
import { axiosAuthenticatedClient as axios } from '@/lib/axios';
import { useState } from 'react';

const studentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  admissionNumber: z
    .string()
    .min(1, 'Admission number is required'),
  photo: z
    .instanceof(File)
    .refine((file) => file.size < 5 * 1024 * 1024, 'Max 5MB'),
});

type StudentFormType = z.infer<typeof studentSchema>;

export default function CreateStudentPage() {
  const [checkingAdmission, setCheckingAdmission] = useState(false);

 const form = useForm<StudentFormType>({
  validate: zodResolver(studentSchema as any), // 👈 type workaround to suppress error
  initialValues: {
    firstName: '',
    lastName: '',
    admissionNumber: '',
    photo: undefined as unknown as File,
  },
});


  const checkAdmissionNumber = async (admissionNumber: string) => {
    setCheckingAdmission(true);
    try {
      const res = await axios.get(`/student/admission/${admissionNumber}`);
      if (res.data?.exists) {
        form.setFieldError('admissionNumber', 'Admission number already exists');
      }
    } catch (err) {
      // ignore if not found
    } finally {
      setCheckingAdmission(false);
    }
  };

  const mutation = useMutation({
    mutationFn: async (data: StudentFormType) => {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('admissionNumber', data.admissionNumber);
      formData.append('photo', data.photo);

      const res = await axios.post('/student', formData);
      return res.data;
    },
    onSuccess: () => {
      notifications.show({
        title: 'Student Created',
        message: 'Student has been successfully created',
        color: 'green',
      });
      form.reset();
    },
    onError: () => {
      notifications.show({
        title: 'Error',
        message: 'Failed to create student',
        color: 'red',
      });
    },
  });

  return (
    <Stack p="md" maw={600}>
      <Title order={2}>Create Student</Title>

      <Paper withBorder shadow="sm" p="md">
        <form
          onSubmit={form.onSubmit((values) => mutation.mutate(values))}
        >
          <Stack>
            <TextInput
              label="First Name"
              placeholder="Enter first name"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter last name"
              {...form.getInputProps('lastName')}
            />
            <TextInput
              label="Admission Number"
              placeholder="Enter admission number"
              {...form.getInputProps('admissionNumber')}
              onBlur={() =>
                checkAdmissionNumber(form.values.admissionNumber)
              }
              disabled={checkingAdmission}
            />
            <FileInput
              label="Photo"
              placeholder="Upload student photo"
              accept="image/*"
              {...form.getInputProps('photo')}
            />

            <Button type="submit" loading={mutation.isPending}>
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
}
