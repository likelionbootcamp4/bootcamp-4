const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

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

// Handle requests
// Method: GET
// Path: /
app.get("/", (req, res) => {
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

// Get a product by id
// Method: GET
// Path: /products/:productId
app.get("/products/:productId", async (req, res) => {
  // Get productId from request
  const productId = req.params.productId;

  // Find document from "products" collection by id
  const product = await Product.findById(productId);

  // Response to client
  res.json(product);
});
