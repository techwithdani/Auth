const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
    getUserProfile,
    updateUserProfile,
    logoutUser,
    authenticateUser,
    signupUser,
} = require("../controllers/userController");

router.get("/profile", protect, getUserProfile);
router.put("/update-profile", protect, updateUserProfile);
router.post("/auth", authenticateUser);
router.post("/signup", signupUser);
router.post("/logout", logoutUser);

module.exports = router;
