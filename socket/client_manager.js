const auth = require("./events/auth");
const room = require("./events/room");
const instances = new Map();


module.exports = {
    attach: (client) => {
        console.info("[INFO] - A new client has been connected");
        auth.sign_in(client, isValid => {
            if (!isValid) {
                client.disconnect();
            } else {
                console.log("[INFO] - Authenticated user");
                room.new(client);
            }
        });
    }
}