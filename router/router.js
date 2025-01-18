const express = require("express");
const router = new express.Router();
const USER = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const Products = require("../models/productSchema");

// Register a new user
router.post("/register", async (req, res) => {
    const { name, email, password, repassword } = req.body;

    if (!name || !email || !password || !repassword) {
        return res.status(422).json({ error: "Please fill all fields" });
    }

    try {
        if (password !== repassword) {
            return res.status(422).json({ error: "Passwords do not match" });
        }

        const preuser = await USER.findOne({ email });
        if (preuser) {
            return res.status(409).json({ error: "Email already exists" });
        }

        // Encrypt password before saving
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new USER({
            name,
            email,
            password: hashedPassword,
            repassword:hashedPassword
        });

        const storedUser = await newUser.save();
        console.log("User registered successfully:", storedUser);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during registration:", error.message);
        res.status(500).json({ error: "Registration failed" });
    }
});

// User login
// In your login route on the server-side (router.js or similar)
router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
      res.status(400).json({ error: "fill the details" });
  }

  try {

      const userlogin = await USER.findOne({ email });
      console.log(userlogin);
      if (userlogin) {
          const isMatch = await bcrypt.compare(password, userlogin.password);
          console.log(isMatch);

          const token = await userlogin.generateAuthToken();
          console.log(token);

          // generate cookie
          res.cookie("Amazonweb", token, {
            expires: new Date(Date.now() + 2589000),
            httpOnly: true,
            secure: false,  // Set to 'true' in production when using HTTPS
            sameSite: "lax", // Controls cross-site cookie behavior
        });
        console.log("Cookie set successfully.");
          if (!isMatch) {
              res.status(400).json({ error: "invalid crediential pass" });
          } else {
              

              res.status(201).json(userlogin);
          }

      } else {
          res.status(400).json({ error: "user not exist" });
      }

  } catch (error) {
      res.status(400).json({ error: "invalid crediential pass" });
      console.log( error.message);
  }
});

router.post('/addcart/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;  // id is the subcategory id

    // Search for the product by subcategory id within the subcategories array
    const product = await Products.findOne({ "subcategories.id": id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Find the specific subcategory by id
    const subcategory = product.subcategories.find(subcat => subcat.id === id);

    if (!subcategory) {
      return res.status(404).json({ error: "Subcategory not found" });
    }

    const userContact = await USER.findOne({ _id: req.userID });
    if (userContact) {
      const CartData = await userContact.addcartdata(subcategory);
      await userContact.save();
      return res.status(201).json(userContact);
    } else {
      return res.status(401).json({ error: "Unauthorized: Invalid user" });
    }
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    return res.status(500).json({ error: "Failed to add item to cart" });
  }
});

// Route to fetch cart details

router.get('/cartdetails', authenticate, async (req, res) => {
  try {
    const user = await USER.findById({ _id: req.userID });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Clean the cart data to remove unnecessary metadata
    const cleanedCartItems = user.carts.map((cartItem) => ({
      id: cartItem._doc.id,
      name: cartItem._doc.name,
      price: cartItem._doc.price,
      rating: cartItem._doc.rating,
      description: cartItem._doc.description,
      imageUrl: cartItem._doc.imageUrl,
      reviews: cartItem._doc.reviews,
      quantity: cartItem.quantity,  // assuming `quantity` is a direct field
    }));

    res.status(200).json({ carts: cleanedCartItems });
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});



// Route to delete item from cart
router.delete("/remove/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Requested item ID:", id);  // Debugging line

    // Find the user by ID
    const user = await USER.findById(req.userID);
    if (!user) {
      console.error("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    // Log the cart data for debugging
    console.log("User's cart before removal:", user.carts);

    // Find the index of the item by comparing the correct 'id'
    const itemIndex = user.carts.findIndex(cartItem => String(cartItem._doc.id) === String(id));
    if (itemIndex === -1) {
      console.error("Item not found in cart");
      return res.status(404).json({ error: "Item not found in cart" });
    }

    // Remove the item from the cart
    user.carts.splice(itemIndex, 1);
    await user.save();

    // Respond with success and updated cart
    res.status(200).json({ message: "Item removed successfully", carts: user.carts });
  } catch (error) {
    console.error("Error removing item:", error.message);
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
});






module.exports = router;

 
