const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

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
    const { name, email, password } = req.body;

    const minLength = 8;
    const maxLength = 16;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    if (password.length < minLength) {
        res.status(400);
        throw new Error(`Password Lenght Less Than ${minLength}`);
    }

    if (password.length > maxLength) {
        res.status(400);
        throw new Error(`Password Length Exceeded ${maxLength}`);
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid User Data");
    }
});

module.exports = {
    getUserProfile,
    updateUserProfile,
    logoutUser,
    authenticateUser,
    signupUser,
};
