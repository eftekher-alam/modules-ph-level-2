import Joi from "joi";

// Joi schema for TName
const joiStdNameSchema = Joi.object({
    firstName: Joi.string().max(15).required().trim().messages({
        "string.max": "Maximum 15 characters, got {VALUE}",
        "any.required": "First name is required",
    }),
    middleName: Joi.string()
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
    lastName: Joi.string().required().alphanum().messages({
        "any.required": "Last name is required",
    }),
});

// Joi schema for TGuardian
const joiStdGuardianSchema = Joi.object({
    fatherName: Joi.string().required().messages({
        "any.required": "Father's name is required",
    }),
    fatherOccupation: Joi.string().required().messages({
        "any.required": "Father's occupation is required",
    }),
    fatherContactNo: Joi.string().required().messages({
        "any.required": "Father's contact number is required",
    }),
    motherName: Joi.string().required().messages({
        "any.required": "Mother's name is required",
    }),
    motherOccupation: Joi.string().required().messages({
        "any.required": "Mother's occupation is required",
    }),
    motherContactNo: Joi.string().required().messages({
        "any.required": "Mother's contact number is required",
    }),
});

// Joi schema for TLocalGuardian
const joiStdLocalGuardianSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Local guardian's name is required",
    }),
    occupation: Joi.string().required().messages({
        "any.required": "Local guardian's occupation is required",
    }),
    contact: Joi.string().required().messages({
        "any.required": "Local guardian's contact number is required",
    }),
    address: Joi.string().required().messages({
        "any.required": "Local guardian's address is required",
    }),
});

// Joi schema for TStudent
const joiStudentSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "Student ID is required",
    }),
    name: joiStdNameSchema.required(),
    gender: Joi.string().valid("male", "female").required().messages({
        "any.only": "{VALUE} is not valid. Gender can only be male or female",
        "any.required": "Gender is required",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email is required.",
        "string.email": "{VALUE} is not a valid email.",
    }),
    dateOfBirth: Joi.string(),
    contactNo: Joi.string().required().messages({
        "any.required": "Contact number is required",
    }),
    emergencyContactNo: Joi.string().required().messages({
        "any.required": "Emergency contact number is required",
    }),
    bloodGroup: Joi.string()
        .valid("O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-")
        .messages({
            "any.only": "{VALUE} is not a valid blood group",
        }),
    presentAddress: Joi.string().required().messages({
        "any.required": "Present address is required",
    }),
    permanentAddress: Joi.string().required().messages({
        "any.required": "Permanent address is required",
    }),
    guardian: joiStdGuardianSchema.required(),
    localGuardian: joiStdLocalGuardianSchema.required(),
    profileImg: Joi.string(),
    isActive: Joi.string()
        .valid("active", "inactive")
        .default("active")
        .messages({
            "any.only":
                "{VALUE} is not valid. Status can only be active or inactive",
        }),
});

export default joiStudentSchema;
