import { Router } from "express";
import { createTeacher, getTeacherByName } from "../controllers/teacherController";

const teacherRouter = Router();


teacherRouter.post("/", createTeacher);
teacherRouter.get("/:teachername", getTeacherByName);


export default teacherRouter;
