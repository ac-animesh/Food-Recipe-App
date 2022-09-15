const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipeSchema = new Schema(
  {
    recipeName: {
      type: String,
      require: true,
    },
    ingredients: {
      type: String,
      require: true,
    },
    process: {
      type: String,
      require: true,
    },
    img: String,

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
