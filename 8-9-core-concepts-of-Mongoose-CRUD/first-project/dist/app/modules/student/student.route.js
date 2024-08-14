"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const router = express_1.default.Router(); //All the routes will be create in this route object.
router.post("/create-student", student_controller_1.StudentControllers.createStudentController);
router.get("/read-students", student_controller_1.StudentControllers.readStudentsController);
router.get("/read-student/:id", student_controller_1.StudentControllers.readStudentController);
router.delete("/delete-student/:id", student_controller_1.StudentControllers.deleteStudentController);
exports.StudentRoutes = router;
