class SessionInstances {
    /**
     * 
     * @param {String} room_key 
     * @param {Map<String, NodeJS.EventEmitter>} players 
     * @param {NodeJS.EventEmitter} screen 
     */
    constructor(room_key, players, screen) {
        this.room_key = room_key;
        this.players = players;
        this.screen = screen;
    }
}

module.exports = SessionInstances;