require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./Routes/routes");
const cors = require("cors");
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.once("connected", () => {
  console.log("database connected");
});

app.listen(PORT, () => {
  console.log(`listening on port number ${PORT}`);
});
