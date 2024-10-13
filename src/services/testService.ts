import TestModel, { ITest } from "../models/testModel"


const createTest = async (student: ITest) => {
    try {
        // const newPost = new StudentModel(post)
        // await newPost.save()
        // return post
    } catch (err) {
        throw new Error("something went wrong");
    }
}


const getGradesByStudentName = async (studentName: string) => {
    try {
        
    } catch (err) {
        
    }
}

const getAvverageByClassName = async (studentName: string) => {
    try {
        
    } catch (err) {
        
    }
}


const getGradeByTestId = async (studentName: string) => {
    try {
        
    } catch (err) {
        
    }
}

const changeGradeByStudentName = async (studentName: string) => {
    try {
        
    } catch (err) {
        
    }
}




export default {
    createTest,
    getGradesByStudentName,
    getAvverageByClassName,
    getGradeByTestId,
    changeGradeByStudentName
}