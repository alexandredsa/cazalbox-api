const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const GameSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4() },
  name: String,
  type: String,
  description: String,
  status: Boolean
}, {
    versionKey: false
  });

GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;