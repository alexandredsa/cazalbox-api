const SessionModel = require('../../models/session');
module.exports = {
    register: (client, roomKey, cb) => {
        client.on('player_register', data => {
            SessionModel.findOne({ 'room.key': roomKey })
                .then(session => {
                    if (session) {
                        data.isAdmin = session.players.length === 0;
                        session.players.push(data);
                        return session.save();
                    }
                })
                .then(session => {
                    const player = session.players.find(p => p.deviceHash === data.deviceHash);
                    client.emit('player_register_response', player)
                    cb(player);
                });
        })
    }
}