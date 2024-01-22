// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const EngineerSchema = new Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     isEngineer: {
//       type: Boolean,
//       default: true,
//     },
//     fullName: {
//       type: String,
//       required: true,
//     },
//     userName: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("EngineerRegister", EngineerSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const EngineerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    // degree: {
    //   data: Buffer,
    //   contentType: String,
    // },
    certificates: {
      type: String,
    },
    whatsappNumber: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isEngineer: {
      type: Boolean,
      default: false, // Default value is set to false as per your request
    },
  },
  {
    timestamps: true,
  }
);

const EngineerModel = mongoose.model("Engineer", EngineerSchema);

export default EngineerModel;
