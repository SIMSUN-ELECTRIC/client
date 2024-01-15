import mongoose from "mongoose";

const { Schema } = mongoose;

const EngineerSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isEngineer: {
      type: Boolean,
      default: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("EngineerRegister", EngineerSchema);
