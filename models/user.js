const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const md5 = require('md5');

const UserSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4() },
  username: String,
  password: String,
  status: Boolean
}, {
    versionKey: false
  });

UserModel = mongoose.model('User', UserSchema);

UserModel.validateAuth = (credentials) => {
  return new Promise((resolve, reject) => {
    if (!credentials.hasOwnProperty("username") || !credentials.hasOwnProperty("password")) {
      return resolve(false);
    }

    credentials.password = md5(credentials.password);
    credentials.status = true;
    UserModel.findOne(credentials)
      .then(user => resolve(user))
      .catch(err => reject(err))
  })

}

module.exports = UserModel;