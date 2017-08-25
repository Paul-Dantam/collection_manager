const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Game = require("./models/gameCollection");
const mustacheExpress = require("mustache-express");
const path = require("path");

const indexRoutes = require("./routes/indexRoutes");
const directoryRoutes = require("./routes/directoryRoutes");

const app = express();
mongoose.Promise = bluebird;

mongoose.connect("mongodb://localhost:27017/gameDirectory");

//templating engine
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

//routes
app.use("/", indexRoutes);
app.use("/directory", directoryRoutes);

app.listen(8000, () => console.log("server is running on port 8000"));
