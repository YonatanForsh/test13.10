import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface ITeacher extends Document {
  name: string
  email: string
  password: string
  className: string
}

const TeacherSchema = new Schema<ITeacher>({
  name: {
    type: String,
    required: [true, "pleasw enter a name"],
    minlength: [4, "name too short!"],
    maxlength: [20, "name too long!"],
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} isn't a valid email!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [4, "password too short!"],
    maxlength: [10, "password too long!"],
  },
  className: {
    type: String,
    required: true,
  }
})

export default mongoose.model<ITeacher>("teacher", TeacherSchema);
