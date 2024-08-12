import { model, Schema } from "mongoose";
import validator from "validator";
import {
    TGuardian,
    TLocalGuardian,
    TName,
    TStudent,
} from "./student.interface";

// =========> Schema <==========
// We can breakdown all the code schemas for optimize.
const stdNameSchema = new Schema<TName>({
    firstName: {
        type: String,
        required: true,
        maxlength: [15, "Maximum 15 characters, got {VALUE}"],
        trim: true,
    },
    middleName: {
        type: String,
        required: true,
        validate: {
            validator: function (value: string) {
                const ourFormat =
                    value.charAt(0).toUpperCase() + value.slice(1);
                if (ourFormat === value) return true;
                else return false;
            },
            message: `{VALUE} is not in capitalize format`,
        },
    },
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
    id: { type: String, required: true, unique: true },
    name: { type: stdNameSchema, required: true },
    gender: {
        type: String,
        enum: {
            //enum used here with custom message
            values: ["male", "female"],
            //here {VALUE} will print given data with the message
            message: "{VALUE} is not valid. Gender can only be male or female",
        },
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: `{VALUE} is not valid email.`,
        },
    }, //custom validation massage
    dateOfBirth: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    }, //enum used
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: stdGuardianSchema, required: true },
    localGuardian: { type: stdLocalGuardianSchema, required: true },
    profileImg: { type: String },
    isActive: { type: String, enum: ["active", "inactive"], default: "active" },
});

// ===========> Model <==============
// const Student = model<Interface/Type>("ModelName", ModelSchema);
const Student = model<TStudent>("Student", studentSchema);

export { Student, studentSchema };
