import { Router } from "express";
import { createStudent, getStudentByName } from "../controllers/studentController";

const studentRouter = Router();

studentRouter.post("/", createStudent);
studentRouter.get("/:studentname", getStudentByName);

export default studentRouter;
