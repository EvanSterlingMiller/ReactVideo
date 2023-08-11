const http = require('http');
const express = require('express');
const config = require('./config');
const socket = rquire('./lib/socket');

const app = express();
const server = http.createServer(app);

app.use('/', express.static(`${__dirname}/..client/dist`))

server.listen(config.PORT, () => {
    socket(server);
    console.log(`Listening at: ${config.PORT}`);
})