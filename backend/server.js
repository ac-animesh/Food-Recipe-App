require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const multer = require("multer");

connectDB();
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/api", require("./routes/userRoutes"));
app.use("/api/recipes", require("./routes/recipeRouter"));

app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
