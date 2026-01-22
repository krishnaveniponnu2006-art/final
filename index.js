const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());

// ✅ DB connection
require("./connection");

// ✅ Blog model
const BlogModel = require("./model");

// ✅ POST API – add blog
app.post("/add", async (req, res) => {
  try {
    const data = await BlogModel.create(req.body);
    res.status(201).json({
      message: "Blog added successfully",
      blog: data
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding blog" });
  }
});

// ✅ GET API – fetch all blogs
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching blogs");
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
