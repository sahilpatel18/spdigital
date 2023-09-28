const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");

router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    company: req.body.company,
    solutionsPurchased: [],
  });

  try {
    const userData = await newUser.save();
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
