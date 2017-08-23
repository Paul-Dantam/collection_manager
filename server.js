const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const logger = require("morgan");
const GameCollection = require("./models/gameCollection");

const app = express();
mongoose.Promise = bluebird;

mongoose.connect("mongodb://localhost:27017/gameDirectory");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.listen(8000, () => console.log("server is running on port 8000"));
