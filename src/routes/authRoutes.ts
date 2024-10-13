import exp from "express"
import { login } from "../controllers/authController"


const router = exp.Router()


router.post("/login", login)



export default router 