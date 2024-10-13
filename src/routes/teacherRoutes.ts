import { Router } from "express";
import { createUser, getUser, getUsers, deleteUser } from "../controllers/userController";

const teacherRouter = Router();

teacherRouter.post("/regist", createUser);
teacherRouter.get("/", getUsers);
teacherRouter.get("/:username", getUser);
teacherRouter.delete("/:username", deleteUser);


export default teacherRouter;
