"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Joi schema for TName
const joiStdNameSchema = joi_1.default.object({
    firstName: joi_1.default.string().max(15).required().trim().messages({
        "string.max": "Maximum 15 characters, got {VALUE}",
        "any.required": "First name is required",
    }),
    middleName: joi_1.default.string()
        .required()
        // .custom((value, helpers) => {
        //     const ourFormat =
        //         value.charAt(0).toUpperCase() + value.slice(1);
        //     if (ourFormat !== value) {
        //         return helpers.message("ok");
        //     }
        //     return value;
        // })
        .messages({
        "any.required": "Middle name is required",
    }),
    lastName: joi_1.default.string().required().alphanum().messages({
        "any.required": "Last name is required",
    }),
});
// Joi schema for TGuardian
const joiStdGuardianSchema = joi_1.default.object({
    fatherName: joi_1.default.string().required().messages({
        "any.required": "Father's name is required",
    }),
    fatherOccupation: joi_1.default.string().required().messages({
        "any.required": "Father's occupation is required",
    }),
    fatherContactNo: joi_1.default.string().required().messages({
        "any.required": "Father's contact number is required",
    }),
    motherName: joi_1.default.string().required().messages({
        "any.required": "Mother's name is required",
    }),
    motherOccupation: joi_1.default.string().required().messages({
        "any.required": "Mother's occupation is required",
    }),
    motherContactNo: joi_1.default.string().required().messages({
        "any.required": "Mother's contact number is required",
    }),
});
// Joi schema for TLocalGuardian
const joiStdLocalGuardianSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        "any.required": "Local guardian's name is required",
    }),
    occupation: joi_1.default.string().required().messages({
        "any.required": "Local guardian's occupation is required",
    }),
    contact: joi_1.default.string().required().messages({
        "any.required": "Local guardian's contact number is required",
    }),
    address: joi_1.default.string().required().messages({
        "any.required": "Local guardian's address is required",
    }),
});
// Joi schema for TStudent
const joiStudentSchema = joi_1.default.object({
    id: joi_1.default.string().required().messages({
        "any.required": "Student ID is required",
    }),
    name: joiStdNameSchema.required(),
    gender: joi_1.default.string().valid("male", "female").required().messages({
        "any.only": "{VALUE} is not valid. Gender can only be male or female",
        "any.required": "Gender is required",
    }),
    email: joi_1.default.string().email().required().messages({
        "any.required": "Email is required.",
        "string.email": "{VALUE} is not a valid email.",
    }),
    dateOfBirth: joi_1.default.string(),
    contactNo: joi_1.default.string().required().messages({
        "any.required": "Contact number is required",
    }),
    emergencyContactNo: joi_1.default.string().required().messages({
        "any.required": "Emergency contact number is required",
    }),
    bloodGroup: joi_1.default.string()
        .valid("O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-")
        .messages({
        "any.only": "{VALUE} is not a valid blood group",
    }),
    presentAddress: joi_1.default.string().required().messages({
        "any.required": "Present address is required",
    }),
    permanentAddress: joi_1.default.string().required().messages({
        "any.required": "Permanent address is required",
    }),
    guardian: joiStdGuardianSchema.required(),
    localGuardian: joiStdLocalGuardianSchema.required(),
    profileImg: joi_1.default.string(),
    isActive: joi_1.default.string()
        .valid("active", "inactive")
        .default("active")
        .messages({
        "any.only": "{VALUE} is not valid. Status can only be active or inactive",
    }),
});
exports.default = joiStudentSchema;
