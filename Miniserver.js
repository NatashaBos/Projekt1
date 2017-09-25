const http = require('http');
const port = 8080;

function requestHandler (request, response) {
response.setHeader('Content-Type', 'text/plain');
response.end(`bas server`);
};

const server = http.createServer(requestHandler);

server.listen(port)
