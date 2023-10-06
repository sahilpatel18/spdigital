const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const SALT = process.env.SALT;
const jwt = require("jsonwebtoken");
const validateToken = require("../Middleware/validateToken");
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
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
    const auth = await bycrypt.compare(password, user.password);

    if (!auth) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    const id = user.id;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET);
    res.json({ token: `Bearer ${token}`, userId: id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/user/:id", validateToken, async (req, res) => {
  const id = req.params.id;

  // validate the token >> in order for the user to see this
  const user = await User.findById(id);
  console.log(user);
});

router.put("/user", validateToken, async (req, res) => {
  const { email, solutionsPurchased } = req.body;

  try {
    await User.findOneAndUpdate(
      { email },
      { solutionsPurchased },
      { new: true }
    );
    res.status(200).json({ message: "User was succesfully updated" });
  } catch (error) {
    res.status(400).json({ message: "could not update user" });
  }
});

module.exports = router;
