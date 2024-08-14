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
exports.StudentServices = void 0;
const student_model_1 = require("./student.model");
const createStudentService = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    // const student = new Student(studentData);
    // if (await student.isUserExist(student.id))
    //     throw new Error(`User exist with this id: ${student.id}`);
    // const result = student.save();
    if (yield student_model_1.Student.staticIsExist(studentData.id))
        throw new Error(`User exist with this id: ${studentData.id} validate by static method`);
    const result = yield student_model_1.Student.create(studentData);
    return result;
});
const readStudentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.Student.find();
    return result;
});
const readStudentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await Student.findOne({ id });
    const result = yield student_model_1.Student.aggregate([{ $match: { id } }]);
    return result;
});
const deleteStudentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("id : ", id);
    const result = yield student_model_1.Student.updateOne({ id }, { isDeleted: true });
    console.log("From service : ", result);
    if (result.modifiedCount) {
        return result;
    }
    else
        throw new Error("Failed to delete");
});
exports.StudentServices = {
    createStudentService,
    readStudentsService,
    readStudentService,
    deleteStudentService,
};
