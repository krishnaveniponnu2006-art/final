const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://krishnaveniponnu2006_db_user:veni123@cluster0.s0rdxvg.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });
