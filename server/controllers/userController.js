const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const getUserProfile = asyncHandler(async (req, res) => {
    if (req.user) {
        res.json({
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
        });
    } else {
        res.status(404);
        throw new Error("User Not Found");
    }
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.json({ message: "User Profile Updated" });
});

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({ message: "Logged Out Successfully" });
});

const authenticateUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        if (await user.matchPassword(password)) {
            generateToken(res, user._id);

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
            });
        }
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
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
        generateToken(res, user._id);

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
