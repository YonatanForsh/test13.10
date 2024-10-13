//Create Teacher
/**
 * @swagger
 * /teacher/:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teacher:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: This is the teacher name
 *                   email:
 *                     type: string
 *                     description: This is the teacher email
 *                   password:
 *                     type: string
 *                     description: This is the user password
 *                   className:
 *                     type: string
 *                     description: This is the teacher class
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */


//Get Teacher
/**
 * @swagger
 * /{teachername}:
 *   get:
 *     summary: Returns a sample message
 *     parameters:
 *       - in: path
 *         name: teachername
 *         required: true
 *         description: The name of the teacher
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A teacher object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 teacher:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: This is the teacher name
 *                     email:
 *                       type: string
 *                       description: This is the teacher email
 *                     password:
 *                       type: string
 *                       description: This is the user password
 *                     className:
 *                       type: string
 *                       description: This is the teacher's class
 */



import { Router } from "express";
import { createTeacher, getTeacherByName } from "../controllers/teacherController";

const teacherRouter = Router();


teacherRouter.post("/", createTeacher);
teacherRouter.get("/:teachername", getTeacherByName);


export default teacherRouter;
