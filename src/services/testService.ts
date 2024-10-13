import TestModel, { ITest } from "../models/testModel"
import StudentModel, { IStudent } from "../models/studentModel"
import { log } from "console";



const createTest = async (test: ITest) => {
    try {
        const newTest = new TestModel(test);
        await newTest.save()
        return newTest
    } catch (err: any) {
        throw new Error (err.message)
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
        const classAvverage = await TestModel.aggregate([
            {
              $group: {
                _id: {},
                averageAge: { $avg: "$grade" }
              }
            }])
            if (classAvverage){
                return classAvverage.map(test => test.averageAge)
            }
    } catch (err: any) {
        return err.message
    }
}


const getGradeByTestId = async (testId: string) => {
    try {
        const test = await TestModel.findById(testId)
        return test
    } catch (err: any) {
        throw new Error(err.message)   
    }
}

const changeGradeByStudentName = async (newGrade:{newGrade: number}, testId: string) => {
    try {
        await TestModel.findOneAndUpdate({_id:testId}, {$set:{grade:newGrade.newGrade}})
        return await TestModel.find({})
    } catch (err: any) {
        console.log(err);
        throw new Error(err.message);
    }
}




export default {
    createTest,
    getGradesByStudentName,
    getAvverageByClassName,
    getGradeByTestId,
    changeGradeByStudentName
}
