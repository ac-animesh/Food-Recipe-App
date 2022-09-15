const fs = require("fs");
const User = require("../models/userSchema");
const Recipe = require("../models/recipeSchema");

// desc     Create a Recipe
// access   private
// route    GET /auth/recipe
const createRecipe = async (req, res) => {
  const img = req.file ? req.file.filename : null;
  const { recipeName, ingredients, process } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const recipe = new Recipe({
      recipeName,
      ingredients,
      process,
      img,
    });
    await recipe.save();
    res.status(200).json({ message: "Recipe is Added" });
  } catch (error) {
    console.log(error);
  }
};

// desc     Create a Recipe
// access   private
// route    GET /auth/recipes
const getAllRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const recipes = await Recipe.find(req.id);
    if (!recipes) {
      return res.status(401).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
  }
};

// desc     Get a Recipe
// access   private
// route    GET /auth/recipe:id
const getRecipe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(401).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
  }
};

// desc     Delete a Recipe
// access   private
// route    GET /auth/recipe:id
const deleteRecipe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(401).json({ message: "Recipe not found" });
    }
    await recipe.remove();
    res.status(200).json({ message: "Recipe is Deleted" });
  } catch (error) {
    console.log(error);
  }
};

// desc     Update a Recipe
// access   private
// route    PUT /auth/recipe:id
const updateRecipe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(401).json({ message: "Recipe not found" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
};
