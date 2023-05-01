// import express from "express"
const express = require("express");

// Create a server
const app = express();

// Server listens on coming requests
app.listen(4000, () => {
  console.log("Server is running...");
});

// Parse to JSON
app.use(express.json());

let todos = [
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
];

// Handle requests
// Method: GET
// Path: /
app.get("/", (request, response) => {
  response.json({
    message: "Hello",
  });
});

app.get("/todos", (request, response) => {
  // Get status from query
  const status = request.query.status; // incomplete

  // Validate if status not exists
  if (!status) {
    return response.json(todos);
  }

  // Filter todos by status (complete, incomplete)
  let filteredTodos;
  if (status === "complete") {
    filteredTodos = todos.filter((todo) => todo.done);
  } else if (status === "incomplete") {
    filteredTodos = todos.filter((todo) => !todo.done);
  } else {
    filteredTodos = todos;
  }

  // Response to client
  response.json(filteredTodos);
});

// Get a task by id (dynamic route)
// Method: GET
// Path: /todos/3
app.get("/todos/:id", (request, response) => {
  // Get id from url
  const id = request.params.id; // "3"

  // Get task by id
  const todo = todos.find((todo) => todo.id === parseInt(id));

  // Validate if task exists
  if (!todo) {
    return response.json({ message: "Task not found!" });
  }
  response.json(todo);
});

app.post("/todos/add", (request, response) => {
  // Get title from body
  const title = request.body.title;

  // Add to todos table
  todos.push({ id: todos.length + 1, title: title, done: false });

  response.json({
    message: "Create a task sucessfully",
  });
});

// Update task
// Method: PUT
// Path: /todos/1
// Body: { title: "Learn Python" }
app.put("/todos/:id", (request, response) => {
  // Get id from url
  const id = request.params.id;

  // Get update task from body
  const updateTitle = request.body.title;

  // Update todos
  todos = todos.map((todo) =>
    todo.id === parseInt(id) ? { ...todo, title: updateTitle } : todo
  );

  // Response to client
  response.json({
    message: "Update task successfully",
  });
});

// Delete a task by id (dynamic route)
// Method: DELETE
// Path: /todos/3
app.delete("/todos/:id", (request, response) => {
  // Get id from url
  const id = request.params.id;

  // Remove task in todos by id
  todos = todos.filter((todo) => todo.id !== parseInt(id));

  // Response to client
  response.json({
    message: "Successfully deleted",
  });
});
