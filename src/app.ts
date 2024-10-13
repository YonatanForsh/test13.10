import express from "express";
import dotenv from "dotenv";
import studentRouter from "./routes/studentRoutes";
import teacherRouter from "./routes/teacherRoutes";
import testRouter from "./routes/studentRoutes";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(express.json());

connectDB();

// Routes
app.use("/teacer", studentRouter);
app.use("/student", teacherRouter);
app.use("/test", testRouter);


// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
