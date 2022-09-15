const mongoose = require("mongoose");

const DB = process.env.DB;

const connectDB = async () => {
  try {
    await mongoose.connect(DB, () => {
      console.log(`MongoDB is Connected !!`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
