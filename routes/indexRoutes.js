app.get("/", (req, res) => {
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
