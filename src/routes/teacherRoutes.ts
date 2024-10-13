import { Router } from "express";
import { createTeacher, getTeacherById } from "../controllers/userController";

const teacherRouter = Router();


teacherRouter.post("/", createTeacher);
teacherRouter.get("/:teachername", getTeacherById);
// teacherRouter.get("/", ()=>{});
// teacherRouter.delete("/:teachername", ()=>{});


export default teacherRouter;
