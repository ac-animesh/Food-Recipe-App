const express = require("express");
const router = express();
const multer = require("multer");

const auth = require("../middleware/authMiddleware");
const {
  createRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/recipeController");

// upload image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "frontend/src/img");
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// desc     Get All Recipes
// access   private
// route    GET /auth/recipes
router.get("/", auth, getAllRecipes);

// desc     Get a Recipe
// access   private
// route    GET /auth/recipe:id
router.get("/:id", auth, getRecipe);

// desc     Create a Recipe
// access   private
// route    POST /auth/recipe
router.post("/", auth, upload.single("myFile"), createRecipe);

// desc     Delete a Recipe
// access   private
// route    DELETE /auth/recipe:id
router.delete("/:id", auth, deleteRecipe);

// desc     Update a Recipe
// access   private
// route    PUT /auth/recipe:id
router.put("/:id", auth, upload.single("myFile"), updateRecipe);

module.exports = router;
