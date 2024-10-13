import { Request, Response } from "express";
import teacherService from "../services/userService"
import Teacher, { ITeacher } from "../models/teacherModel";
import { log } from "console";



export const createTeacher = async (req: Request, res: Response) => {
    try {
        const resolt = await teacherService.createTeacher(req.body)
        res.status(201).json({
            msg: "teacher created",
            resolt
        })
    } catch (err: any) {
        res.status(400).json(err.message)
    }
}


export const getTeacherByName = async (req: Request, res: Response) => {
    try {
        const resolt = await teacherService.getTeacher()
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};
