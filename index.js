const express = require("express");
const cors = require("cors");

const BlogModel = require("./model");
require("./connection");

const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());

/* ---------- ADD BLOG ---------- */
app.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBlog = new BlogModel(data);
    await newBlog.save();
    res.send({ message: "Blog added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error adding blog");
  }
});

/* ---------- GET BLOGS ---------- */
app.get("/get", async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

/* ---------- DELETE BLOG ---------- */
app.delete("/delete/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
  }
});

/* ---------- UPDATE BLOG ---------- */
app.put("/update/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
