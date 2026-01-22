const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://krishnaveniponnu2006_db_user:veni123@cluster0.s0rdxvg.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log(error);
  });
