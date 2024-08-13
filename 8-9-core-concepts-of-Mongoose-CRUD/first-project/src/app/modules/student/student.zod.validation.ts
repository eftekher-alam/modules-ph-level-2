import { z } from "zod";

// Define name schema
const stdNameSchema = z.object({
    firstName: z.string().max(15, "Maximum 15 characters"),
    middleName: z
        .string()
        .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
            message: "Middle name must start with a capital letter",
        }),
    lastName: z.string(),
});

// Define guardian schema
const stdGuardianSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContactNo: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContactNo: z.string(),
});

// Define local guardian schema
const stdLocalGuardianSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contact: z.string(),
    address: z.string(),
});

// Define student schema
const zodStudentSchema = z.object({
    id: z.string(),
    name: stdNameSchema,
    password: z.string(),
    gender: z.enum(["male", "female"], {
        errorMap: () => ({ message: "Gender can only be male or female" }),
    }),
    email: z.string().email("Invalid email address"),
    dateOfBirth: z.string().optional(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    bloodGroup: z
        .enum(["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"])
        .optional(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: stdGuardianSchema,
    localGuardian: stdLocalGuardianSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(["active", "inactive"]).default("active"),
});

// Export the schema
export { zodStudentSchema };
