const database = require("./infrastructure/database");
const socket = require("./infrastructure/socket");

database()
    .then(() => socket.run());