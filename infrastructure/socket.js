const config = require('config');
const port = config.get('socket.port');
const server = require('http').createServer();
const io = require('socket.io')(server);
const clientManager = require("../socket/client_manager")

module.exports = {
    run: () => {
        io.on('connection', client => {
            clientManager.attach(client);
        });
        server.listen(port);
    }
}
