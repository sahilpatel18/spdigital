const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const SALT = process.env.SALT;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");
const sgTemplate = require("../Utils/sgTemplate");
const Solution = require("../Models/solutionSchema");

router.post("/register", async (req, res) => {
  const { name, email, password, company, solutionsPurchased } = req.body;

  const query = User.where({ email });
  const user = await User.findOne(query);

  if (!user) {
    const hashedPass = await bcrypt.hash(password, parseInt(SALT));

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

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const id = user.id;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: "4200000",
    });
    res.status(200).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
});

router.put("/user/:id", async (req, res) => {
  const id = req.params.id;
  const { email, company } = req.body;

  try {
    await User.findByIdAndUpdate(id, { email, company });
    res.status(200).json({ message: "User was succesfully updated" });
  } catch (error) {
    res.status(400).json({ message: "could not update user" });
  }
});

sgMail.setApiKey(process.env.CONTACT_API_KEY);
router.post("/send-mail", async (req, res) => {
  const { name, company, email, phone, message } = req.body;
  const msg = sgTemplate(name, company, email, phone, message);
  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

router.post("/solutions", async (req, res) => {
  const { title, price, description } = req.body;
  try {
    const newSolution = new Solution({ title, price, description });
    await newSolution.save();

    res.status(201).json({ message: "Successfully Added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/solutions", async (req, res) => {
  try {
    const data = await Solution.find({});
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/solutions/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Solution.findById(id);
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
