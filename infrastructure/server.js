const express = require('express');
const config = require('config');
const port = config.get('server.port');

const router = express.Router();
const app = express();

module.exports = {
    run: () => {
        app.listen(port, () => {
            console.log(`Running on port: ${port}`);
        });
    }
}
