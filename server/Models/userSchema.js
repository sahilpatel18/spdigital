const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  company: String,
  solutionsPurchased: [{ title: String, cost: Number }],
});

const User = model("User", userSchema);

module.exports = User;
