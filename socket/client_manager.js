const auth = require("./events/auth");
const room = require("./events/room");
const player = require("./events/player");
const resources = require("./events/resources");
// map key - room_key + player_key
const instances = new Map();


module.exports = {
    attach: (client) => {
        console.info("[INFO] - A new client has been connected");
        auth.sign_in(client, userData => {
            if (userData.isValid) {
                console.log("[INFO] - Authenticated user");
                room.new(client, userData.user_id);
            }
        });

        room.sign_in(client, data => {
            if (data.validate) {
                resources.send_pictures(client);
                player.register(client, data.room_key, playerData => {
                    instances.set(`${data.room_key}_${playerData.deviceHash}`, client);
                });
            }
        });
    }
}