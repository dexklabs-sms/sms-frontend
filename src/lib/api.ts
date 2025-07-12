import { axiosAuthenticatedClient } from "./axios";
import { CreateStudentInput } from "./schema";

const URL = process.env.NEXT_PUBLIC_API_URL;

export async function createStudent(input:CreateStudentInput) {
    const formData = new FormData();
    Object.entries(input).forEach(([key, value]) => {
        if (value instanceof Date) {
            formData.append(key, value.toISOString());
        } else if (value instanceof File) {
            formData.append(key, value, value.name);
        } else if (value !== null && value !== undefined) {
            formData.append(key, String(value));
        }
    }); 

    const { data } = await axiosAuthenticatedClient.post(URL + 'student', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return data;
}