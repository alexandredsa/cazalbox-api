const SessionModel = require('../../models/session');
module.exports = {
    register: (client, roomKey, cb) => {
        client.on('screen_register', data => {
            SessionModel.findOne({ 'room.key': roomKey })
                .then(session => {
                    if (session) {
                        session.screen = data;
                        return session.save();
                    }
                })
                .then(session => {
                    client.emit('screen_register_response', session.screen)
                    cb(screen);
                });
        })
    }
}