const express = require("express");
const indexRoutes = express.Router();
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const Game = require("../models/gameCollection");

mongoose.Promise = bluebird;

mongoose.connect("mongodb://localhost:27017/gameDirectory");

indexRoutes.get("/", (req, res) => {
  Game.find()
    .then(foundGames => {
      !foundGames
        ? res.send({ msg: "No Games found" })
        : console.log(foundGames);
      res.render("directory", { gameDirectory: foundGames });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = indexRoutes;
