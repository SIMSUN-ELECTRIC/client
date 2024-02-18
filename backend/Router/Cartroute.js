// routes/cart.js
import Cart from "../Models/CartModel.js";
import express from "express";

const router = express.Router();

// Get cart by user ID
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("id in backend", userId);
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    // console.log("cart data:", cart);
    res.json(cart);
  } catch (error) {
    console.log(error);
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
    inquiryDetails,
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
        inquiryDetails,
        address,
      });
    } else {
      // Update cart information if it exists
      cart.name = name;
      cart.phone = phone;
      cart.email = email;
      cart.inquiryDetails = inquiryDetails;
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
    let cart = await Cart.findOne({ userId });

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

router.put("/inquiry/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, phoneNumber, email, address, enquiry } = req.body;
  console.log("this is req body in inquiry:", req.body);
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    (cart.name = name.toString()),
      (cart.phone = phoneNumber.toString()),
      (cart.email = email.toString()),
      (cart.inquiryDetails = enquiry.toString()),
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

export default router;
