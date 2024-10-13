import { Router } from "express";
import { createTest, 
    getGradesByStudentName, 
    getAvverageByClassName, 
    getGradeByTestId,
    changeGradeByStudentName
 } from "../controllers/userController";

const testRouter = Router();


testRouter.post("/", createTest);
testRouter.get("/:studentname", getGradesByStudentName);
testRouter.get("/:classname", getAvverageByClassName);
testRouter.get("/:testid", getGradeByTestId);
testRouter.patch("/:studentname", changeGradeByStudentName);




export default testRouter;
