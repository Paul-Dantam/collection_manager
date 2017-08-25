const express = require("express");
const directoryRoutes = express.Router();
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const Game = require("./models/gameCollection");

mongoose.Promise = bluebird;

mongoose.connect("mongodb://localhost:27017/gameDirectory");

directoryRoutes.post("/gameDirectory", (req, res) => {
  let newGame = new Game(req.body);
  newGame
    .save()
    .then(savedGame => {
      res.send(savedGame);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

directoryRoutes.put("/gameDirectory/:id", (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body).then(updatedGame => {
    !updatedGame
      ? res.send({ msg: "Could not update Game" })
      : res.send(updatedGame);
  });
});

directoryRoutes.delete("/gameDirectory/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id).then(updatedGame => {
    !updatedGame
      ? res.send({ msg: "Could not remove" })
      : res.send(updatedGame);
  });
});

module.exports = directoryRoutes;
