

import { Router } from "express";
import {
    createTest,
    getGradesByStudentName,
    getAvverageByClassName,
    getGradeByTestId,
    changeGradeByStudentName
} from "../controllers/testController";

const testRouter = Router();


testRouter.post("/", createTest);
testRouter.get("/student/:studentname", getGradesByStudentName);
testRouter.get("/class/:classname", getAvverageByClassName);
testRouter.get("/:testid", getGradeByTestId);
testRouter.patch("/:testid", changeGradeByStudentName);




export default testRouter;
