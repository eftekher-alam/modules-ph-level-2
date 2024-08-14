import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentService = async (studentData: TStudent) => {
    // const student = new Student(studentData);
    // if (await student.isUserExist(student.id))
    //     throw new Error(`User exist with this id: ${student.id}`);

    // const result = student.save();

    if (await Student.staticIsExist(studentData.id))
        throw new Error(
            `User exist with this id: ${studentData.id} validate by static method`,
        );
    const result = await Student.create(studentData);
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

const deleteStudentService = async (id: string) => {
    console.log("id : ", id);

    const result = await Student.updateOne({ id }, { isDeleted: true });
    console.log("From service : ", result);

    if (result.modifiedCount) {
        return result;
    } else throw new Error("Failed to delete");
};

export const StudentServices = {
    createStudentService,
    readStudentsService,
    readStudentService,
    deleteStudentService,
};
