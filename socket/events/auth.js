const UserModel = require("../../models/user");

module.exports = {
    sign_in: (client, cb) => {
        client.on('sign_in', credentials => {
            UserModel.validateAuth(credentials)
                .then(user => {
                    let isValid = !!user;

                    client.emit('sign_in_response', {
                        username: credentials.username,
                        authenticated: isValid
                    });

                    cb({ user_id: user._id, isValid });
                })
                .catch(err => {
                    console.error(err);
                    client.emit('sign_in_response', {
                        username: credentials.username,
                        authenticated: false
                    })
                    cb({ isValid: false });
                });
        });
    }
}