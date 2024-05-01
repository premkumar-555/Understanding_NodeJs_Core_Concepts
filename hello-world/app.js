// Creating sample node js server to send text from a file
const http = require("node:http");
const fs = require("node:fs");

// http server
const server = http.createServer();

// listen for request events
server.on("request", (request, response) => {
    const result = fs.readFileSync("./text.txt");

    response.setHeader("Content-Type", "text/plain");

    response.end(result);
});

// listen for server
server.listen(4080, "127.0.0.1", () => {
console.log("Server has started on: ", server.address()); 
});
