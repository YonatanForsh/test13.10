import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface ITest extends Document {
  subject: string
  grade: number
  teacherId: Schema.Types.ObjectId
  studentId: Schema.Types.ObjectId
}

const TestSchema = new Schema<ITest>({
    subject: {
    type: String,
    required: [true, "pleasw enter a subject"]
  },
  grade: {
    type: Number,
    required: false,
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "teacher",
    required: true
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "student",
    required: true
  }
}
)

export default mongoose.model<ITest>("test", TestSchema);
