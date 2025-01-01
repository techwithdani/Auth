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

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404);
    throw new Error("No Users Found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
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

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
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
  getAllUsers,
};
