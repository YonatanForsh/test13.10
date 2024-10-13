import StudentModel, { IStudent } from "../models/studentModel"


const createStudent = async (student: IStudent) => {
    try {
        // const newPost = new StudentModel(post)
        // await newPost.save()
        // return post
    } catch (err) {
        throw new Error("something went wrong");
    }
}


const getStudent = async (studentName: string) => {

}


export default {
    createStudent,
    getStudent
}