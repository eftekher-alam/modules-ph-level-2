// here we can user type that will consider as interface
// or we can use interface directly

import { Model } from "mongoose";

type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

type TName = {
    firstName: string;
    middleName: string;
    lastName: string;
};

type TLocalGuardian = {
    name: string;
    occupation: string;
    contact: string;
    address: string;
};

type TStudent = {
    id: string;
    name: TName;
    email: string;
    gender: "male" | "female";
    dateOfBirth?: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg?: string;
    isActive: "active" | "inactive";
};

// type TStudentMethods = {
//     isUserExist(id: string): Promise<TStudent | null>;
// };

interface StaticStudentModel extends Model<TStudent> {
    staticIsExist(id: string): Promise<TStudent>;
}

// type StudentModel = Model<TStudent, object, TStudentMethods>; //its for instance method

export {
    TGuardian,
    TName,
    TLocalGuardian,
    TStudent,
    // StudentModel,
    // TStudentMethods,
    StaticStudentModel,
};
