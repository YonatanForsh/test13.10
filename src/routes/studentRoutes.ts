//Create Student
/**
 * @swagger
 * /student/:
 *   post:
 *     summary: Register a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: This is the student name
 *                   email:
 *                     type: string
 *                     description: This is the student email
 *                   password:
 *                     type: string
 *                     description: This is the student password
 *                   className:
 *                     type: string
 *                     description: This is the class
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */



//Get student
/**
 * @swagger
 * /{studentname}:
 *   get:
 *     summary: Returns a sample message
 *     parameters:
 *       - in: path
 *         name: teachername
 *         required: true
 *         description: The name of the student
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
 *                 student:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: This is the student name
 *                     email:
 *                       type: string
 *                       description: This is the student email
 *                     password:
 *                       type: string
 *                       description: This is the student password
 *                     className:
 *                       type: string
 *                       description: This is the student class
 */



import { Router } from "express";
import { createStudent, getStudentByName } from "../controllers/studentController";

const studentRouter = Router();

studentRouter.post("/", createStudent);
studentRouter.get("/:studentname", getStudentByName);

export default studentRouter;
