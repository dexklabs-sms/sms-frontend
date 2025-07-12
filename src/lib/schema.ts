import { z } from 'zod';

export const createStudentSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    gender: z.enum(['Male', 'Female', 'Others']),
    fatherName: z.string().min(1, { message: "Father's name is required" }),
    motherName: z.string().min(1, { message: "Mother's name is required" }),
    dateOfBirth: z.date({ message: 'Date of birth is required' }),
    adhaarNumber: z.string().length(12, { message: 'Aadhaar must be 12 digits' }),
    address: z.string().min(1, { message: 'Address is required' }),
    parentEmail: z.string().email({ message: 'Invalid email address' }),
    parentPhone: z.string().min(10, { message: 'Must be a valid phone number' }),
    admissionNumber: z.string().min(1, { message: 'Admission number is required' }),
    admissionDate: z.date({ message: 'Admission date is required' }),
    photoFile: z.instanceof(File).optional(),
    sectionId: z.number().positive(),
    academicYearId: z.number().positive(),
});

export type CreateStudentInput = z.infer<typeof createStudentSchema>;