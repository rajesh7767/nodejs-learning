const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("hey this is a node js");
});

server.listen(3000, () => console.log("server create successfully"));