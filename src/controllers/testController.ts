import { Request, Response } from "express";
import testService from "../services/testService"
import Test, { ITest } from "../models/testModel";
import { log } from "console";



export const createTest = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.createTest(req.body)
        res.status(201).json({
            msg: "test created",
            resolt
        })
    } catch (err: any) {
        res.status(400).json(err.message)
    }
}


export const getGradesByStudentName = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.getGradesByStudentName(req.params.studentname)
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};


export const getAvverageByClassName = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.getAvverageByClassName(req.body)
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};


export const getGradeByTestId = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.getGradeByTestId(req.body)
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};


export const changeGradeByStudentName = async (req: Request, res: Response) => {
    try {
        const resolt = await testService.changeGradeByStudentName(req.body)
        res.status(200).json(resolt)
    } catch (err) {
        res.status(400).json(err)
    }
};