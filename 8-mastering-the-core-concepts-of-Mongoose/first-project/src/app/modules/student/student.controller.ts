import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudentController = async (req: Request, res: Response) => {
    try {
        const studentData = req.body.student;
        //the data will send to service
        const result = await StudentServices.createStudentService(studentData);

        //send response
        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

export const StudentControllers = { createStudentController };
