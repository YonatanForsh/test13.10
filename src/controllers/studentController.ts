import { Request, Response, NextFunction } from "express";
import studentService from "../services/postService";
import Student, { IStudent } from "../models/studentModel";





export const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await studentService.createStudent(req.body)
    res.status(201).json({
      msg: "student created succesfully",
      resolt
    })
  } catch (err) {
    res.status(400).json(err)
  }
};



export const getStudentByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await studentService.getStudent
    res.status(200).json(resolt)
  } catch (err) {
    res.status(400).json(err)
  }
};


