const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Solution = require("./solutionSchema");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  company: String,
  solutionsPurchased: [{ type: mongoose.Schema.Types.ObjectId, ref: Solution }],
});

const User = model("User", userSchema);

module.exports = User;
