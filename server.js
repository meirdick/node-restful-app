'use strict';
var http = require('http');

var hostname = 'localhost';
var port = 3001;

var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('<h1>Heelo world!</h1>\n');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});