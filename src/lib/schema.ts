import { z } from "zod";

export const studentSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  dob: z.date(),
  section: z.string(),
  class: z.string(),
  gender: z.enum(["Male", "Female", "Other"]),
  aadharNo: z.string().length(12, "Aadhar must be 12 digits"),
  address: z.string(),

  fatherName: z.string(),
  motherName: z.string(),
  email: z.string().email(),
  phoneNumber1: z.string().regex(/^\d{10}$/, "Enter valid 10-digit phone"),
  phoneNumber2: z.string().regex(/^\d{10}$/, "Enter valid 10-digit phone"),
  parentGender: z.enum(["Male", "Female"]),

  guardianName: z.string(),
  guardianPhoneNumber: z.string().regex(/^\d{10}$/),
  admissionDate: z.date(),
  admissionFee: z.number().min(0),
  penNumber: z.string().optional(),

  image: z.custom<File[]>().refine((files) => files?.length === 1, "Upload one image"),
});