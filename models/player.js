const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const PlayerSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4() },
    nickname: String,
    pictureUri: String,
    deviceHash: String,
    score: Number
}, {
  versionKey: false
});

PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;