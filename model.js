const mongoose = require("mongoose");

// Schema
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

// Model
const BlogModel = mongoose.model("Blog", schema);

module.exports = BlogModel;
