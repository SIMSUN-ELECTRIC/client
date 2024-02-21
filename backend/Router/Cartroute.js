// routes/cart.js
import Cart from "../Models/CartModel.js";
import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Get cart by user ID
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("id in backend", userId);
    const cart = await Cart.findOne({ userId }, { maxTimeMS: 20000 }).populate(
      "items.productId"
    );
    // console.log("cart data:", cart);
    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/prevEnquiry/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("User ID:", userId);

    // Assuming you have a model named Enquiry to represent previous inquiries
    // Fetch previous inquiries based on the user ID
    const previousInquiries = await Cart.find({ userId }).populate(
      "items.productId"
    );
    console.log("this is previous Inquiries", previousInquiries);
    // Respond with the fetched inquiries
    res.status(200).json(previousInquiries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/allInquiry/:id", async (req, res) => {
  try {
    // Fetch all previous inquiries
    const previousInquiries = await Cart.find().populate("items.productId");
    console.log("Previous Inquiries:", previousInquiries);

    // Respond with the fetched inquiries
    res.status(200).json(previousInquiries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add item to cart
router.post("/addItem", async (req, res) => {
  const {
    userId,
    productId,
    productName,
    productPrice,
    productImg,
    name,
    phone,
    email,
    EnquiryDetails,
    address,
  } = req.body;
  // console.log(req.body);

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({
        userId,
        items: [],
        name,
        phone,
        email,
        EnquiryDetails,
        address,
      });
    } else {
      // Update cart information if it exists
      cart.name = name;
      cart.phone = phone;
      cart.email = email;
      cart.EnquiryDetails = EnquiryDetails;
      cart.address = address;
    }

    // Check if item already exists in cart
    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex !== -1) {
      // If item exists, update quantity
      cart.items[itemIndex].quantity += 1;
    } else {
      // If item does not exist, add to cart
      cart.items.push({
        productId,
        quantity: 1,
        name: productName,
        price: productPrice,
        image: productImg,
      });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

// Remove item from cart
router.delete("/delete/:id/:product", async (req, res) => {
  const userId = req.params.id;
  const productId = req.params.product;

  console.log("User ID:", userId);
  console.log("product id: ", productId);
  try {
    let cart = await Cart.findOne({ userId }, { maxTimeMS: 20000 });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Extract the product ID from the request body
    // const productId = req.body.productId;
    console.log("Product ID to delete:", productId);

    // Filter out the item with the given product ID from the cart items
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
});

router.put("/Enquiry/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, phoneNumber, email, address, enquiry } = req.body;
  console.log("this is req body in Enquiry:", req.body);
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    (cart.name = name.toString()),
      (cart.phone = phoneNumber.toString()),
      (cart.email = email.toString()),
      (cart.EnquiryDetails = enquiry.toString()),
      (cart.address = address.toString()),
      await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.put("/updateQuantity/:userId/:productId", async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  const { quantity } = req.body;

  console.log("userid in put", userId);
  console.log("productId in put", productId);
  console.log("quantity in put", quantity);
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the item index in the cart
    const itemIndex = cart.items.findIndex(
      (item) => item._id.toString() === productId.toString()
    );

    console.log("cart items", cart.items);
    if (itemIndex !== -1) {
      // Update the quantity of the item
      cart.items[itemIndex].quantity = quantity;
      await cart.save();
      res.json(cart);
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
});

// send email
router.post("/sendEmail/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Retrieve cart information for the user
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    console.log("cart in email", cart);
    // Compose email content
    const emailContent = `
            <h1>Cart Information</h1>
            <p>User ID: ${cart.userId}</p>
            <p>Name: ${cart.name}</p>
            <p>Email: ${cart.email}</p>
            <p>Phone: ${cart.phone}</p>
            <p>Address: ${cart.address}</p>
            <p>Enquiry: ${cart.EnquiryDetails}</p>
            <h2>Items:</h2>
            <ul>
                ${cart.items
                  .map((item) => `<li>${item.name} - ${item.quantity}</li>`)
                  .join("")}
            </ul>
        `;

    // Create Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: "goswami@gmail.com",
      subject: "Cart Information",
      html: emailContent,
    });

    console.log("Email sent: ", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

export default router;
