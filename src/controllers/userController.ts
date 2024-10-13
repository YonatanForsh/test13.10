import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";
import userService from "../services/userService"
import { log } from "console";



export const createUser = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const resolt = await userService.createUser(req.body)
        res.status(201).json({
            msg: "user created",
            resolt
        })
    } catch (err: any) {
        res.status(400).json(err.message)        
    }
}


export const getUsers = async (req: Request, res: Response) => {
    try {
        const resolt = await userService.getUsers()
        res.status(200).json(resolt)   
    } catch (err) {
        res.status(400).json(err)
    }
};


export const getUser = async (req: Request, res: Response) => {
    try {
        if(req.params.username){
        const resolt = await userService.getUserById(req.params.username)
        res.status(200).json(resolt) 
        }  
    } catch (err) {
        res.status(400).json(err)
    }
};


export const deleteUser = async (req: Request, res: Response) => {
    try {
        if(req.params.username){
        const resolt = await userService.deleteUser(req.params.username)
        res.status(200).json({
            msg: "user deleted",
            resolt
        }) 
        }  
    } catch (err) {
        res.status(400).json(err)
    }
};



// Optionally, add DELETE and EDIT functions
