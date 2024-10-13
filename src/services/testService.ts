import TestModel, { ITest } from "../models/testModel"
import StudentModel, { IStudent } from "../models/studentModel"



const createTest = async (test: ITest) => {
    try {
        const newTest = new TestModel(test);
        await newTest.save()
        return newTest
    } catch (err: any) {
        return err.message
    }
}


const getGradesByStudentName = async (studentName: string) => {
    try {
        const studentGrades = await TestModel.find({}).populate({
            path: 'studentId',
            match: { name: studentName }
        }).select("grade")
        .lean()
        if (studentGrades) {
            return studentGrades.map(test => test.grade);
        }    } catch (error) {
        console.error("Error fetching student grades: ", error);
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