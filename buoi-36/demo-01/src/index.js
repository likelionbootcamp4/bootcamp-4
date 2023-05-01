// import express from "express"
const express = require("express");

// Create a server
const app = express();

// Server listens on coming requests
app.listen(4000, () => {
  console.log("Server is running...");
});

// Handle requests
// Method: GET
// Path: /
app.get("/", (request, response) => {
  response.json({
    message: "Hello",
  });
});

app.get("/todos", (request, response) => {
  response.json([
    {
      id: 1,
      title: "Learn HTML",
      done: false,
    },
    {
      id: 2,
      title: "Learn CSS",
      done: false,
    },
    {
      id: 3,
      title: "Learn JS",
      done: true,
    },
  ]);
});

app.post("/todos/add", (request, response) => {
  response.json({
    message: "Create a task sucessfully",
  });
});
