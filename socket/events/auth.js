const UserModel = require("../../models/user");

module.exports = {
    sign_in: (client, cb) => {
        client.on('sign_in', credentials => {
            UserModel.validateAuth(credentials)
                .then(isValid => {
                    client.emit('sign_in_response', {
                        username: credentials.username,
                        authenticated: isValid
                    });

                    cb(isValid);
                })
                .catch(err => {
                    console.error(err);
                    client.emit('sign_in_response', {
                        username: credentials.username,
                        authenticated: false
                    })
                    cb(false);
                });
        });
    }
}