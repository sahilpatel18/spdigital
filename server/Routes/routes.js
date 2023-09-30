const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const SALT = process.env.SALT;
const bycrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { name, email, password, company, solutionsPurchased } = req.body;

  const query = User.where({ email });
  const user = await User.findOne(query);

  if (!user) {
    const hashedPass = await bycrypt.hash(password, parseInt(SALT));

    const newUser = new User({
      name,
      email,
      password: hashedPass,
      company,
      solutionsPurchased,
    });

    try {
      const userData = await newUser.save();
      res.status(200).json(userData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res
      .status(400)
      .json({ message: "This user is already registered with that email" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const query = User.where({ email });
  const user = await User.findOne(query);

  if (user) {
    const hash = user.password;
    const auth = await bycrypt.compare(password, hash);
    if (auth) {
      res.status(200).json({ message: "Logged in!" });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "Invalid Email or Password" });
  }
});

module.exports = router;
