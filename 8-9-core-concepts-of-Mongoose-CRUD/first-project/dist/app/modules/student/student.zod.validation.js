"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodStudentSchema = void 0;
const zod_1 = require("zod");
// Define name schema
const stdNameSchema = zod_1.z.object({
    firstName: zod_1.z.string().max(15, "Maximum 15 characters"),
    middleName: zod_1.z
        .string()
        .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
        message: "Middle name must start with a capital letter",
    }),
    lastName: zod_1.z.string(),
});
// Define guardian schema
const stdGuardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
// Define local guardian schema
const stdLocalGuardianSchema = zod_1.z.object({
    name: zod_1.z.string(),
    occupation: zod_1.z.string(),
    contact: zod_1.z.string(),
    address: zod_1.z.string(),
});
// Define student schema
const zodStudentSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: stdNameSchema,
    password: zod_1.z.string(),
    gender: zod_1.z.enum(["male", "female"], {
        errorMap: () => ({ message: "Gender can only be male or female" }),
    }),
    email: zod_1.z.string().email("Invalid email address"),
    dateOfBirth: zod_1.z.string().optional(),
    contactNo: zod_1.z.string(),
    emergencyContactNo: zod_1.z.string(),
    bloodGroup: zod_1.z
        .enum(["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"])
        .optional(),
    presentAddress: zod_1.z.string(),
    permanentAddress: zod_1.z.string(),
    guardian: stdGuardianSchema,
    localGuardian: stdLocalGuardianSchema,
    profileImg: zod_1.z.string().optional(),
    isActive: zod_1.z.enum(["active", "inactive"]).default("active"),
    isDeleted: zod_1.z.boolean(),
});
exports.zodStudentSchema = zodStudentSchema;
