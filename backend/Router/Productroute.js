/* eslint-disable no-undef */
// import express from "express";
// import multer from "multer";
// import ProductModel from "../Models/ProductModel.js";
// import cloudinary from "cloudinary";

// const router = express.Router();
// const app = express();

// const uploadMiddleWare = multer({ dest: "uploads/" });

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// app.use("/uploads", express.static(__dirname + "/uploads"));

// router.get("/allProduct", async (req, res) => {
//   try {
//     const product = await ProductModel.find();
//     if (product) {
//       res.status(200).json({ result: product });
//     } else {
//       res.status(201).json({ message: "Error in retrieving data" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error in retrieving data from server" });
//   }
// });

// router.post(
//   "/submitProduct",
//   uploadMiddleWare.single("file"),
//   async (req, res) => {
//     const { prodName, prodDescp, price, category } = req.body;
//     console.log(prodName + " " + prodDescp + " " + price + " " + category);

//     const { path } = req.file;
//     cloudinary.uploader.upload(path, async function (error, result) {
//       if (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Upload failed" });
//       }
//       console.log(result.url);
//       await ProductModel.create({
//         name: prodName,
//         descp: prodDescp,
//         price,
//         category,
//         imageUrl: result.url,
//       });
//       res.status(200).json("File uploaded successfully");
//     });
//   }
// );

// router.get("/product/:name", async (req, res) => {
//   const name = req.params.name;
//   try {
//     const product = await ProductModel.find({ category: name });
//     if (product) {
//       res.status(200).json({ result: product });
//     } else {
//       res.status(201).json({ message: "Error in retrieving data" });
//     }
//   } catch (error) {
//     res.status(500).json("Error in getting data by server");
//   }
// });

// export default router;

import express from "express";
import multer from "multer";
import Product from "../Models/ProductModel.js";
import cloudinary from "cloudinary";

const uploadMiddleWare = multer({ dest: "uploads/" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

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
        name: prodName,
        description: prodDescp,
        price,
        category,
        imageUrl: result.url,
      });
      res
        .status(200)
        .json({ message: "Product added successfully", imageUrl: result.url });
    });
  }
);

// Update a product by ID
router.put("/:id", async (req, res) => {
  const { name, description, price, imageUrl, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        imageUrl,
        category,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
