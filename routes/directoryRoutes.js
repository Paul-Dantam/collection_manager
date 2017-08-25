app.post("/gameDirectory", (req, res) => {
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

app.put("/gameDirectory/:id", (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body).then(updatedGame => {
    !updatedGame
      ? res.send({ msg: "Could not update Game" })
      : res.send(updatedGame);
  });
});

app.delete("/gameDirectory/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id).then(updatedGame => {
    !updatedGame
      ? res.send({ msg: "Could not remove" })
      : res.send(updatedGame);
  });
});
