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


const RoomSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4() },
  key: String
}, {
    versionKey: false
  });

const ScreenSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4() },
  deviceHash: String,
}, {
    versionKey: false
  });


const SessionSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4() },
  room: RoomSchema,
  players: [PlayerSchema],
  screen: ScreenSchema,
  owner: { type: String, ref: 'User' },
  currentGame: { type: String, ref: 'Game' },
  createdAt: {
    type: Date,
    default: Date.now()
  }
}, {
    versionKey: false
  });

SessionModel = mongoose.model('Session', SessionSchema);

module.exports = SessionModel;