const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// contact route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received:", name, email, message);

  res.json({ message: "Form submitted successfully!" });
});

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});