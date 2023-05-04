const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const verify = require("./middlewares/verify");
const jwt = require("jsonwebtoken");

const DB_URI =
  "mongodb+srv://likelionbootcamp4:1111@cluster0.3nn4yog.mongodb.net/ecommerce?retryWrites=true&w=majority";

// Create a server
const app = express();

// Connect to MongoDB
mongoose.connect(DB_URI).then(() => {
  console.log("Database connected!");
});

// Listen incoming requests
app.listen(4000, () => {
  console.log("Server is running...");
});

// CORS
app.use(cors());

// Body parsing
app.use(express.json());

// Custom middleware
// app.use((req, res, next) => {
//   console.log("Authenticate user");
//   next();
// });

// Handle requests
// Method: GET
// Path: /
app.get("/", verify, (req, res) => {
  res.json({ message: "Hello!" });
});

// Get all products
// Method: GET
// Path: /products
app.get("/products", async (req, res) => {
  // Find all documents from "products" collection
  const products = await Product.find();

  // Response to client
  res.json(products);
});

// Search product
// Method: GET
// Path: /products/search
app.get("/products/search", async (req, res) => {
  // Get query q from request
  const q = req.query.q; // Mobile
  console.log(q);

  // Check if q exists or not, if not return []
  if (!q) {
    return res.json([]);
  }

  // Get documents based on q
  // Find all titles contains "laptop" (q)
  const products = await Product.find({
    title: new RegExp(q, "i"), // insensitive
  });

  // Cach 2: title: { $regex: q, $options: "i" }

  // Response to client
  res.json(products);
});

// Get a product by id
// Method: GET
// Path: /products/:productId
app.get("/products/:productId", async (req, res, next) => {
  try {
    // Get productId from request
    const productId = req.params.productId;

    // Find document from "products" collection by id
    const product = await Product.findById(productId);

    // Response to client
    res.json(product);
  } catch (err) {
    next(new Error("Product not found!"));
  }
});

// Add a product
// Method: POST
// Path: /products/add
app.post("/products/add", async (req, res) => {
  try {
    // Get body from request
    const newProduct = req.body;

    // Insert into "products" collection
    const product = await Product.create(newProduct);

    // Response to client
    res.json(product);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Update a product
// Method: PUT
// Path: /products/:productId
app.put("/products/:productId", async (req, res) => {
  // Get productId from request
  const productId = req.params.productId;

  // Get body (updateProduct) from request
  const updateProduct = req.body;

  // Update document based on productId and updateProduct
  const product = await Product.findByIdAndUpdate(productId, updateProduct, {
    new: true,
  });

  // Response to client
  res.json(product);
});

// Delete a product by Id
// Method: DELETE
// Path: /products/:productId
app.delete("/products/:productId", async (req, res) => {
  // Get productId from request
  const productId = req.params.productId;

  // Delete document based on productId
  const product = await Product.findByIdAndDelete(productId);

  // Response to client
  res.json(product);
});

// Sign up
// Method: POST
// Path: /signup
// Body: {username, password}
app.post("/signup", async (req, res, next) => {
  try {
    // Get username and password from body
    const { username, password } = req.body;

    // Validate username and password
    if (!username || !password) {
      throw new Error("Invalid username or passwords");
    }

    // Check user exists or not
    const user = await User.findOne({ username });
    if (user) {
      throw new Error("Username exists");
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create user document in database
    await User.create({ username, hash });

    // Response to client
    res.json({ message: "OK" });
  } catch (err) {
    next(err);
  }
});

// Sign in
// Method: POST
// Path: /signin
// Body: {username, password}
app.post("/signin", async (req, res, next) => {
  try {
    // Get username and password from body
    const { username, password } = req.body;

    // Validate username and password
    if (!username || !password) {
      throw new Error("Invalid username or password");
    }

    // Check username exists or not
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("User not found");
    }

    // Compare password and hash password
    const isValid = bcrypt.compareSync(password, user.hash);

    // Check valid password
    if (!isValid) {
      throw new Error("Invalid password");
    }

    // Generate access token
    const accessToken = jwt.sign({ user_id: user._id }, "bimat", {
      expiresIn: "30s",
    });

    // Response to client
    res.json({ message: "OK", accessToken: accessToken });
  } catch (err) {
    next(err);
  }
});

// Get all users
// Method: GET
// Path: /users
app.get("/users", async (req, res) => {
  // Get all users from database
  const users = await User.find();

  // Response to client
  res.json(users);
});

// Error handler
app.use((err, req, res, next) => {
  res.json({
    error: err.message || "Page not found",
  });
});
