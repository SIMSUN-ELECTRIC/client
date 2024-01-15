/* eslint-disable no-undef */

import express from "express";
import bcrypt from "bcryptjs";
import ConsumerModel from "../Models/ConsumerModel.js";
import EngineerModel from "../Models/EngineerModel.js";
import AdminModel from "../Models/AdminModel.js";

const salt = bcrypt.genSaltSync(10);
const router = express.Router();

router.post("/consumerRegister", async (req, res) => {
  const { userName, fullName, email, password } = req.body;

  try {
    await ConsumerModel.create({
      userName,
      fullName,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.json({ message: "Registration successful!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration failed" });
  }
});

router.post("/EngineerRegister", async (req, res) => {
  const { userName, fullName, email, password } = req.body;

  try {
    await EngineerModel.create({
      userName,
      fullName,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.json({ message: "Engineer Registration successful!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration failed" });
  }
});

router.post("/adminRegister", async (req, res) => {
  const { email, password, secretKey } = req.body;

  if (secretKey !== process.env.SECRET_KEY) {
    res.json({ message: "Secret key doesn't match" });
    return; // Stop further execution
  }

  try {
    await AdminModel.create({
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.json({ message: "Registration successful!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration failed" });
  }
});

export default router;
