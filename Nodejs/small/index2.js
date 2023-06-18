const http = require('http');

http.createServer((req, res) => {
    res.write("<h1>Hello there!</h1>");
    res.end();
}).listen(6500);