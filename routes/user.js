const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const user = require("../models/user");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, getUser);
router.put("/user/:userId", isSignedIn, updateUser);

module.exports = router;
