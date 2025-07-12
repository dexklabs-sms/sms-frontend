import { Title } from "@mantine/core";
import { CreateStudentForm } from "@/components/forms/createStudentForm";

export default function createStudent() {
    return (
        <>
            <Title px={"md"} py={"md"}>Create Student </Title>
            <CreateStudentForm />
        </>
    )
}
