//mongodb+srv://bsse1442:lPKzhuE7xWDp7M6u@cluster0.ixsq7ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// app.js
const express = require("express");
const app = express();
require("./conn/connection"); // Import the connection file

// Middleware to parse JSON requests (optional but useful for APIs)
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

