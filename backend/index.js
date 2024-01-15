/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./Router/seedRoutes.js";
import loginRouter from "./Router/Loginroute.js";
import registerRouter from "./Router/Registerroute.js";
import productRoutes from "./Router/Productroute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/seed", seedRouter);
app.use("/api/products", productRoutes);
app.use("/api", loginRouter);
app.use("/api", registerRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//previous code
// const dotenv = require("dotenv");
// const express = require("express");
// const cors = require("cors");
// const colors = require("colors");
// const app = express();
// const cloudinary = require("cloudinary");

// dotenv.config({ path: "./config.env" });

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// const corsOptions = {
//   origin: "*",
//   credentials: true,
// };

// app.use(express.json());
// app.use(cors());
// app.use(cors(corsOptions));
// app.use(express.json());
// app.use("/uploads", express.static(__dirname + "/uploads"));

// require("./DataBase/Connection");
// app.use("/api", require("./Router/Loginroute"));
// app.use("/api", require("./Router/Registerroute"));
// app.use("/api", require("./Router/Productroute"));

// const PORT = process.env.PORT;

// app.listen(PORT, (req, res) => {
//   console.log(`connect in the port ${PORT}`);
// });
