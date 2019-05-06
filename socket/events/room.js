const SessionModel = require('../../models/session');
const Chance = require('chance');
const chance = new Chance();
const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

module.exports = {
    new: (client, user_id) => {
        client.on('room_new', () => {
            const key = chance.string({ pool, length: 5 });
            const session = {
                owner: user_id,
                room: {
                    key
                }
            }
            SessionModel.create(session)
                .then(session => {
                    client.emit("room_new_response", { room: session.room });
                })

        });
    },
    sign_in: (client, cb) => {
        client.on('room_sign_in', data => {
            SessionModel.findOne({ 'room.key': data.key })
                .then(session => {
                    client.emit("room_sign_in_response", { result: !!session });
                    cb({ room_key: data.key, validate: true });
                });
        });
    }
}