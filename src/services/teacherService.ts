import TeacherModel, { ITeacher } from "../models/teacherModel"
import { log } from "console"
import mongoose from "mongoose"
import userModel from "../models/teacherModel"
import { Schema } from "inspector/promises"
import teacherModel from "../models/teacherModel"



const createTeacher = async (teacher: ITeacher) => {
    try {
        const newTeacher = new TeacherModel(teacher);
        await newTeacher.save();
        return newTeacher
    } catch (err: any) {
        // if (err.code === 11000) {
        //     throw new Error("Username already exists")
        // }
        throw new Error("Invalid teacher");
    }
};


const getTeacher = async (teacherName: string) => {
    try {
    // const user = await TeacherModel.findOne({ username: teacherName })
    // if (user) return user
    // else {
    //     return "user not found"
    // }
    } catch (err) {
            
    }
}


export default {
    createTeacher,
    getTeacher
}
