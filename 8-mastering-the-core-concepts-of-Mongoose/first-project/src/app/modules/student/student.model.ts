import { Schema } from "mongoose";
import {
    TGuardian,
    TLocalGuardian,
    TName,
    TStudent,
} from "./student.interface";

// =========> Schema <==========
// We can breakdown all the code schemas for optimize.
const stdNameSchema = new Schema<TName>({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
});

const stdGuardianSchema = new Schema<TGuardian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
});

const stdLocalGuardianSchema = new Schema<TLocalGuardian>({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>({
    id: { type: String },
    name: stdNameSchema,
    gender: ["male", "female"], //enum
    email: { type: String, required: true },
    dateOfBirth: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"], //enum
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: stdGuardianSchema,
    localGuardian: stdLocalGuardianSchema,
    profileImg: { type: String },
    isActive: ["active", "inactive"],
});

export { studentSchema };
