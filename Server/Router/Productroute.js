const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ConsumerModel = require("../Models/ConsumerModel");
const EngineerModel = require("../Models/EngineerModel");
const express = require("express");
const app = express();

const router = express.Router();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const ProductModel = require("../Models/ProductModel");

const uploadMiddleWare = multer({ dest: "uploads/" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use("/uploads", express.static(__dirname + "/uploads"));

router.get(
  "/allProduct",
  async (req, res) => {
    
    try {
      // console.log("working")
      const product = await ProductModel.find();
      if(product){
        res.status(200).json({result:product})
      } else {
        res.status(201).json({message:"Error in retriving data"})
      }
    } catch (error) {
      res.status(500).json({message:"Error in retriving data from server"})
      
    }
 
  }
);


router.post(
  "/submitProduct",
  uploadMiddleWare.single("file"),
  async (req, res) => {
    const { prodName, prodDescp, price, category } = req.body;
    console.log(prodName + " " + prodDescp + " " + price + " " + category);

    const { path } = req.file;
    cloudinary.uploader.upload(path, async function (error, result) {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Upload failed" });
      }
      console.log(result.url);
      await ProductModel.create({
        name:prodName,
        descp: prodDescp,
        price,
        category,
        imageUrl: result.url,
      });
      res.status(200).json("File uploaded successfully");
    });
 
  }
);

router.get(
  "/product/:name",
  async (req, res) => {
    const name = req.params.name;
    // console.log(name);
    try {
      // console.log(name)
      const product = await ProductModel.find({category:name}); 
      if(product){
        res.status(200).json({result:product})
      } else {
        res.status(201).json({message:"Error in retriving data"})
      }
    } catch (error) {
      res.status(500).json("Error in getting data by server");
    }
  }
);


module.exports = router;
