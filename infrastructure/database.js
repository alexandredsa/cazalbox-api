const mongoose = require('mongoose');
mongoose.Promise = Promise;
const config = require('config');
const url = config.get('mongo.url');


module.exports = () => {
  return new Promise((resolve,reject) => {
    mongoose.connect(url, {}, (err) => {
      if(err) {
        console.error(err);
        reject(err);
        process.exit(1);
      }
       
      console.info(`DB connection successful`);
        resolve();

      mongoose.connection.on('disconnected', () => {
        console.warn('Mongoose connection disconnected from DB');
      });

      mongoose.connection.on("connected", (ref) => {
        console.info('DB reconnection successful');
      });

      mongoose.connection.on("error", (err) => {
        console.error('Mongoose reached limit of retries', err);
        process.exit(1);
      });
    });
  });
};