import { Router } from "express";
import { createUser, getUser, getUsers, deleteUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:username", getUser);
userRouter.delete("/:username", deleteUser);


export default userRouter;
