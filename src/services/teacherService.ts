import TeacherModel, { ITeacher } from "../models/teacherModel"
import { log } from "console"
import mongoose from "mongoose"
import userModel from "../models/teacherModel"
import { Schema } from "inspector/promises"
import teacherModel from "../models/teacherModel"



const createTeacher = async (teacher: ITeacher) => {
    try {
        const newTeacher = new TeacherModel(teacher);
        await newTeacher.save()
        return newTeacher
    } catch (err: any) {
        return err.message
    }
};


const getTeacher = async (teacherName: string) => {
    try {
        const teacer = await TeacherModel.findOne({ name: teacherName})
        if(teacer) return teacer
        else{
            return "teacher not found"
        }
    } catch (err) {
        throw new Error("Invalid teacherName");
    }
}


export default {
    createTeacher,
    getTeacher
}
