import  TeacherModel from "../models/teacherModel"
import  StudentModel from "../models/studentModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const loginFromService = async (user: any) => {
    try {
        const dbTeacher = await TeacherModel.findOne({ email: user.email })
        if (dbTeacher) {       
            if(await user.password === dbTeacher.password){
                const tokenSecret = process.env.TOKEN_SECERET;
                if (!tokenSecret) {
                    throw new Error("TOKEN_SECERET is not defined in the environment variables");
                }
                const token = await jwt.sign({ id: dbTeacher.id, role: "teacher" } , tokenSecret,{
                    expiresIn: "3m"})
                return token 
            }


        const dbStudent = await StudentModel.findOne({ email: user.email })
        if (dbStudent) {
            if(await bcrypt.compare(user.password, dbStudent.password)){
                const tokenSecret = process.env.TOKEN_SECERET;
                if (!tokenSecret) {
                    throw new Error("TOKEN_SECERET is not defined in the environment variables");
                }
                const token = await jwt.sign({ id: dbStudent.id, role: "student" } , tokenSecret,{
                    expiresIn: "3m"})
                return token
            }
        if (!dbTeacher && !dbStudent) throw new Error("user not found")
        }
    }
    } catch (err:any) {
        throw new Error (err.message)
    }
}


export {
    loginFromService
}

