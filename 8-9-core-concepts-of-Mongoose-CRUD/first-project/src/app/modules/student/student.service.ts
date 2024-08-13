import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentService = async (studentData: TStudent) => {
    const student = new Student(studentData);
    if (await student.isUserExist(student.id))
        throw new Error(`User exist with this id: ${student.id}`);

    const result = student.save();

    // const result = await Student.create(student);
    return result;
};

const readStudentsService = async () => {
    const result = await Student.find();
    return result;
};

const readStudentService = async (id: string) => {
    const result = await Student.findOne({ id });
    return result;
};

export const StudentServices = {
    createStudentService,
    readStudentsService,
    readStudentService,
};
