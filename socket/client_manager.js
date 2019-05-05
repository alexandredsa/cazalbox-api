const auth = require("./events/auth");
const room = require("./events/room");
const resources = require("./events/resources");
const instances = new Map();


module.exports = {
    attach: (client) => {
        console.info("[INFO] - A new client has been connected");
        auth.sign_in(client, userData => {
            if (userData.isValid) {
                console.log("[INFO] - Authenticated user");
                instances.set(userData.user_id, client);
                room.new(client, userData.user_id);
            }
        });

        room.sign_in(client, isValid => {
            if (isValid) {
                resources.send_pictures(client);
            }
        });
    }
}