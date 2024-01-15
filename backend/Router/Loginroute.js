/* eslint-disable no-undef */
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ConsumerModel from "../Models/ConsumerModel.js";
import EngineerModel from "../Models/EngineerModel.js";
import AdminModel from "../Models/AdminModel.js";

const router = express.Router();

router.post("/consumerLogin", async (req, res) => {
  const KEY = process.env.KEY;
  const email = req.body.email;

  try {
    const userData = await ConsumerModel.findOne({ email });

    if (!userData) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter the valid Email" });
    }

    const confirmpassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!confirmpassword) {
      return res.status(400).json({
        success: false,
        message: "Please Enter the valid Email or Password",
      });
    }

    const data = {
      user: {
        id: userData.id,
      },
    };

    const authToken = jwt.sign(data, KEY, {
      expiresIn: "7d",
    });
    return res.json({ success: true, authToken, userData });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

router.post("/engineerLogin", async (req, res) => {
  const KEY = process.env.KEY;
  const email = req.body.email;

  try {
    const userData = await EngineerModel.findOne({ email });

    if (!userData) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter the valid Email" });
    }

    const confirmpassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!confirmpassword) {
      return res.status(400).json({
        success: false,
        message: "Please Enter the valid Email or Password",
      });
    }

    const data = {
      user: {
        id: userData.id,
      },
    };

    const authToken = jwt.sign(data, KEY, {
      expiresIn: "7d",
    });
    return res.json({ success: true, authToken, userData });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

router.post("/adminLogin", async (req, res) => {
  const KEY = process.env.KEY;
  const email = req.body.email;
  const isAdmin = req.body.isAdmin;

  try {
    const userData = await AdminModel.findOne({ email });

    if (!userData) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter the valid Email" });
    }

    const confirmpassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!confirmpassword) {
      return res.status(400).json({
        success: false,
        message: "Please Enter the valid Email or Password",
      });
    }

    const data = {
      user: {
        id: userData.id,
        isAdmin,
      },
    };

    const authToken = jwt.sign(data, KEY, {
      expiresIn: "7d",
    });
    return res.json({ success: true, authToken, userData, isAdmin });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
