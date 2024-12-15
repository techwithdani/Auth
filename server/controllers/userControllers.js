const asyncHandler = require("express-async-handler");

const getUserProfile = asyncHandler(async (req, res) => {
    res.json({ message: "User Profile" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.json({ message: "User Profile Updated" });
});

const logoutUser = asyncHandler(async (req, res) => {
    res.json({ message: "User Logged Out" });
});

const authenticateUser = asyncHandler(async (req, res) => {
    res.json({ message: "User Authenticated" });
});

const signupUser = asyncHandler(async (req, res) => {
    res.json({ message: "User signed up" });
});

module.exports = {
    getUserProfile,
    updateUserProfile,
    logoutUser,
    authenticateUser,
    signupUser,
};
