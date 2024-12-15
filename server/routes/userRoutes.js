const express = require("express");
const router = express.Router();
const {
    getUserProfile,
    updateUserProfile,
    logoutUser,
    authenticateUser,
    signupUser,
} = require("../controllers/userControllers");

router.get("/profile", getUserProfile);
router.put("/update-profile", updateUserProfile);
router.post("/authenticate", authenticateUser);
router.post("/signup", signupUser);
router.post("/logout", logoutUser);

module.exports = router;
