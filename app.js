const http = require('http');
const handleRequest = require('./routes')

const server = http.createServer((req, res) => handleRequest(req, res))

server.listen(3003)