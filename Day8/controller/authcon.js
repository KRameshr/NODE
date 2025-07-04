const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../Usermodel/UserModel");
const User = require("../Usermodel/UserModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new UserModel({ username, password });
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res
      .status(201)
      .json({ message: "Register Success", username: user.username, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "user is not found" });
    }
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      return res.status(403).json({ message: "Password is not found" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECR);
    res
      .status(201)
      .json({ message: "Login Success", username: user.username, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };
