const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//

const GamingCollectionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  medium: {
    type: String,
    required: true,
    enum: ["tabletop", "videogame", "boardgame", "card"]
  },
  players: {
    type: String,
    enum: ["single", "co-op", "group"]
  },
  publisher: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  writer: String,
  producer: String,
  designer: String,
  version: Number,
  release: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("CollectionOfGame", GamingCollectionSchema);
