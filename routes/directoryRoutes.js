const express = require("express");
const directoryRoutes = express.Router();
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const Game = require("../models/gameCollection");

mongoose.Promise = bluebird;

directoryRoutes.get("/update/:id", (req, res) => {
  Game.findOne({ _id: req.params.id })
    .then(foundGame => {
      !foundGame
        ? res.send({ msg: "No Games found" })
        : res.render("update", { data: foundGame });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

directoryRoutes.get("/newItem", (req, res) => {
  res.render("submit");
});

directoryRoutes.post("/newgame", (req, res) => {
  let newGame = new Game(req.body);
  newGame
    .save()
    .then(savedGame => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

directoryRoutes.post("/update/:id", (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body).then(updatedGame => {
    !updatedGame
      ? res.send({ msg: "Could not update Game" })
      : res.send(updatedGame);
  });
});

directoryRoutes.post("/delete/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id).then(deletedGame => {
    !deletedGame ? res.send({ msg: "Could not remove" }) : res.redirect("/");
  });
});

module.exports = directoryRoutes;
