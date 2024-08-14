import { model, Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import {
    StaticStudentModel,
    // StudentModel,
    TGuardian,
    TLocalGuardian,
    TName,
    TStudent,
    // TStudentMethods,
} from "./student.interface";
import config from "../../config";

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

// 1. Send Student type
// 2. Send the Model that created in the interface file (start with caps letter)
// 3. Send method type
// const studentSchema = new Schema<TStudent, StudentModel, TStudentMethods>({ //its for instance method

const studentSchema = new Schema<TStudent, StaticStudentModel>(
    {
        id: { type: String, required: true, unique: true },
        name: { type: stdNameSchema, required: true },
        password: { type: String },
        gender: {
            type: String,
            enum: {
                //enum used here with custom message
                values: ["male", "female"],
                //here {VALUE} will print given data with the message
                message:
                    "{VALUE} is not valid. Gender can only be male or female",
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
        isActive: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
        isDeleted: Boolean,
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);

//virtual property or used for view model.
studentSchema.virtual("fullName").get(function () {
    return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

//instance  method declaration
// studentSchema.method("isUserExist", async function isUserExist(id: string) {
//     const result = Student.findOne({ id });
//     return result;
// });

//static method
studentSchema.static("staticIsExist", async function staticIsExist(id) {
    return await Student.findOne({ id });
});

//Pre document middleware
studentSchema.pre("save", async function (next) {
    this.password = bcrypt.hashSync(
        this.password,
        Number(config.bcrypt_salt_round),
    );
    next();
});

//Post document middleware
studentSchema.post("save", function (doc, next) {
    doc.password = ""; //the password should not send to the response.
    next();
});

// Query middleware
// It will prevent from retrieve those document which has isDeleted: true
studentSchema.pre("find", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

// [ $match: { id: "S120011"} ] this is pipeline of aggregate, the aggregate exist in the service
//Goal is to add the below filter to the pipeline array at the first position
// { $match: { $isDeleted: { $ne: true } } }
studentSchema.pre("aggregate", function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});

studentSchema.pre("findOne", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

// ===========> Model <==============
// const Student = model<Interface/Type>("ModelName", ModelSchema);
const Student = model<TStudent, StaticStudentModel>("Student", studentSchema);

export { Student, studentSchema };
