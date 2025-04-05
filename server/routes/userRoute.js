const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  getUserProfile,
  updateUserProfile,
  logoutUser,
  signinUser,
  signupUser,
  getAllUsers,
} = require("../controllers/userController");

router.get("/profile", protect, getUserProfile);
router.get("/", protect, getAllUsers);
router.put("/update-profile", protect, updateUserProfile);
router.post("/signin", signinUser);
router.post("/signup", signupUser);
router.post("/logout", logoutUser);

module.exports = router;
