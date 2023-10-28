const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const solutionSchema = new Schema({
  title: String,
  price: Number,
  description: String,
});

const Solution = model("Solution", solutionSchema);

module.exports = Solution;
