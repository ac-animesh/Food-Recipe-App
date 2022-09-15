const express = require("express");
const router = express();
const auth = require("../middleware/authMiddleware");
const { login, register, getUser } = require("../controllers/authController");

// desc     login route
// access   public
// route    POST /auth/login
router.post("/login", login);

// desc     register route
// access   public
// route    POST /auth/register
router.post("/register", register);

//access   PUBLIC
//route    GET  api/auth/register
//desc     get a user
router.get("/getuser", auth, getUser);

module.exports = router;
