const http = require("node:http");
require("dotenv").config();

const PORT = process.env.PORT || 50001;
//console.log(PORT);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({message:"hey im on new server"}));
    res.end();
})

server.listen(PORT, () => {
    console.log("server created successfully done.");
})