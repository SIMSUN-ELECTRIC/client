const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ConsumerModel = require('../Models/ConsumerModel');
const EngineerModel = require('../Models/EngineerModel');
const AdminModel = require('../Models/AdminModel'); 

router.post('/consumerLogin', async (req, res) => {
    const KEY = process.env.KEY;
    const email = req.body.email; 

    try {
        const userData = await ConsumerModel.findOne({ email });

        if (!userData) {
            res.status(400).json({ success: false, message: "Please Enter the valid Email" });
            return;
        }

        const confirmpassword = await bcrypt.compare(req.body.password, userData.password);

        if (!confirmpassword) {
            res.status(400).json({ success: false, message: "Please Enter the valid Email or Password" });
            return;
        }

        const data = { 
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, KEY);
        return res.json({ success: true, authToken: authToken, userData: userData });

    } catch (err) {
        console.log(err);
    }
});

router.post('/engineerLogin', async (req, res) => {
    const KEY = process.env.KEY;
    const email = req.body.email; 

    try {
        const userData = await EngineerModel.findOne({ email });

        if (!userData) {
            res.status(400).json({ success: false, message: "Please Enter the valid Email" });
            return;
        }

        const confirmpassword = await bcrypt.compare(req.body.password, userData.password);

        if (!confirmpassword) {
            res.status(400).json({ success: false, message: "Please Enter the valid Email or Password" });
            return;
        }

        const data = { 
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, KEY);
        return res.json({ success: true, authToken: authToken, userData: userData });

    } catch (err) {
        console.log(err);
    }
});


router.post('/adminLogin', async (req, res) => {
    const KEY = process.env.KEY;
    const email = req.body.email; 

    try {
        const userData = await AdminModel.findOne({ email });

        if (!userData) {
            res.status(400).json({ success: false, message: "Please Enter the valid Email" });
            return;
        }

        const confirmpassword = await bcrypt.compare(req.body.password, userData.password);

        if (!confirmpassword) {
            res.status(400).json({ success: false, message: "Please Enter the valid Email or Password" });
            return;
        }

        const data = { 
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, KEY);
        return res.json({ success: true, authToken: authToken, userData: userData });

    } catch (err) {
        console.log(err);
    }
});

module.exports = router;