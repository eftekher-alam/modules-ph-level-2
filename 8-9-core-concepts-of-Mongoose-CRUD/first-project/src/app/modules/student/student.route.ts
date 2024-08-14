import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router(); //All the routes will be create in this route object.

router.post("/create-student", StudentControllers.createStudentController);
router.get("/read-students", StudentControllers.readStudentsController);
router.get("/read-student/:id", StudentControllers.readStudentController);
router.delete(
    "/delete-student/:id",
    StudentControllers.deleteStudentController,
);

export const StudentRoutes = router;
