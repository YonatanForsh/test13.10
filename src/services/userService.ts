import UserModel, { IUser } from "../models/teacherModel"
import { userDTO } from "../dto/userDto"
import { log } from "console"
import mongoose from "mongoose"
import userModel from "../models/teacherModel"
import { Schema } from "inspector/promises"



const createUser = async (user: IUser) => {
    try {
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser
    } catch (err: any) {
        if (err.code === 11000) {
            throw new Error("Username already exists")
        }
        throw new Error("Invalid user");
    }
};


const getUserById = async (username: string) => {
    const user = await UserModel.findOne({ username: username })
    if (user) return user
    else {
        return "user not found"
    }
}


const getUsers = async () => {
    try {
        const allUsers = await UserModel.find({})
        return allUsers
    } catch (err) {
        throw new Error("there aren't users yet")
    }
}


const deleteUser = async (username: string) => {
    const user = await UserModel.findOne({ username: username })
    if (user) {
        await UserModel.deleteOne({ username: username })
        return user
    } else {
        return "user not found"
    }
}


const updateUserDetails = async (user: typeof UserModel) => {

}


export default {
    createUser,
    getUserById,
    getUsers,
    deleteUser,
    updateUserDetails
}
