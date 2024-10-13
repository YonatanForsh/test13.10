import StudentModel, { IStudent } from "../models/studentModel"


const createStudent = async (student: IStudent) => {
    try {
        const newStudent = new StudentModel(student);
        await newStudent.save()
        return newStudent
    } catch (err: any) {
        return err.message
    }
}


const getStudent = async (studentName: string) => {
    try {
        const student = await StudentModel.findOne({ name: studentName})
        if(student) return student
        else{
            return "student not found"
        }
    } catch (err: any) {
        return err.message
    }
}


export default {
    createStudent,
    getStudent
}