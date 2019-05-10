const auth = require("./events/auth");
const room = require("./events/room");
const player = require("./events/player");
const screen = require("./events/screen");
const session = require("./events/session");
const resources = require("./events/resources");
const SessionInstances = require('./session_instances');
const sessionInstancesMap = new Map();


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
                console.log("[INFO] - A new user in the room");
                resources.send_pictures(client);

                if (!sessionInstancesMap.get(data.room_key)) {
                    sessionInstancesMap.set(data.room_key, new SessionInstances(data.room_key, new Map(), null));
                }

                screen.register(client, data.room_key, screenData => {
                    console.log(`[INFO] - The screen device has been registered on room [${data.room_key}]`);
                    const sessionInstance = sessionInstancesMap.get(data.room_key);
                    sessionInstance.screen = client;
                });

                player.register(client, data.room_key, playerData => {
                    console.log(`[INFO] - A new player has been registered on room [${data.room_key}]`);
                    console.log(`[INFO] - Player name [${playerData.nickname}]`);
                    const sessionInstance = sessionInstancesMap.get(data.room_key);
                    sessionInstance.players.set(playerData.deviceHash, client);
                });

                session.ready(client, data.room_key, sessionData => {
                    
                });
            }
        });
    }
}