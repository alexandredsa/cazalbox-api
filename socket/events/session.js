const SessionModel = require('../../models/session');
module.exports = {
    ready: (client, roomKey, cb) => {
        client.on('session_ready', data => {
            SessionModel.findOne({ 'room.key': roomKey })
                .then(session => {
                    if (session) {
                        session.startedAt = Date.now();
                        return session.save();
                    }
                })
                .then(session => cb(session));
        })
    }
}