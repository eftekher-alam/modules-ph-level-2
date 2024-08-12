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
        res.status(500).json({
            success: false,
            message: "Something is wrong",
            data: error instanceof Error ? error.message : error,
        });
    }
};

const readStudentsController = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.readStudentsService();

        res.status(200).json({
            success: true,
            message: "Data found successfully.",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const readStudentController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await StudentServices.readStudentService(id);

    res.status(200).json({
        success: true,
        message: "Found the student data with the given id",
        data: result,
    });
};

export const StudentControllers = {
    createStudentController,
    readStudentsController,
    readStudentController,
};
