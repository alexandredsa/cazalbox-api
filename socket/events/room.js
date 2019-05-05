const Chance = require('chance');
const chance = new Chance();
const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

module.exports = {
    new: (client) => {
        client.on('room_new', () => {
            const key = chance.string({ pool, length: 5 });
            client.emit("room_new_response", { key });
        });
    }
}