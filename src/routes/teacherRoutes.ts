import { Router } from "express";
import { createTeacher, getTeacherByName } from "../controllers/userController";

const teacherRouter = Router();


teacherRouter.post("/", createTeacher);
teacherRouter.get("/:teachername", getTeacherByName);
// teacherRouter.get("/", ()=>{});
// teacherRouter.delete("/:teachername", ()=>{});


export default teacherRouter;
