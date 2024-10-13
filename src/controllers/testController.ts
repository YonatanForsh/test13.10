import { Request, Response } from "express";
import testService from "../services/userService"
import Test, { ITest } from "../models/testModel";
import { log } from "console";



export const createTest = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.createTest(req.body)
        res.status(201).json({
            msg: "teacher created",
            resolt
        })
    } catch (err: any) {
        res.status(400).json(err.message)
    }
}


export const getGradesByStudentName = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.getGradesByStudentName()
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};


export const getAvverageByClassName = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.getAvverageByClassName()
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};


export const getGradeByTestId = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.getGradeByTestId()
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};


export const changeGradeByStudentName = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.changeGradeByStudentName()
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};