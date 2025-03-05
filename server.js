const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}).listen(2000, () => console.log("Server running on port 2000"));
