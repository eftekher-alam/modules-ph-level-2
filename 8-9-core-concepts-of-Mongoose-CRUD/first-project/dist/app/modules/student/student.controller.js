"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
const student_service_1 = require("./student.service");
const student_zod_validation_1 = require("./student.zod.validation");
// import joiStudentSchema from "./student.joi.validation";
const createStudentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentData = req.body.student;
        //========[joi validation]==========
        // const { error, value: validStudentData } =
        //     joiStudentSchema.validate(studentData);
        // if (error) {
        //     res.status(500).json({
        //         success: true,
        //         message: "Something is wrong",
        //         data: validStudentData,
        //     });
        // }
        // =============[zod validation]============
        const validStudentData = student_zod_validation_1.zodStudentSchema.parse(studentData);
        // console.log("validation: ", validStudentData);
        //the data will send to service
        const result = yield student_service_1.StudentServices.createStudentService(validStudentData);
        //send response
        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something is wrong",
            data: error instanceof Error ? error.message : error,
        });
    }
});
const readStudentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.readStudentsService();
        res.status(200).json({
            success: true,
            message: "Data found successfully.",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const readStudentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield student_service_1.StudentServices.readStudentService(id);
    res.status(200).json({
        success: true,
        message: "Found the student data with the given id",
        data: result,
    });
});
const deleteStudentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield student_service_1.StudentServices.deleteStudentService(id);
        res.status(200).json({
            success: true,
            message: "Student deleted successfully.",
            data: result,
        });
    }
    catch (error) {
        res.status(200).json({
            success: true,
            message: "Something is wrong.",
            data: error instanceof Error ? error.message : error,
        });
    }
});
exports.StudentControllers = {
    createStudentController,
    readStudentsController,
    readStudentController,
    deleteStudentController,
};
