const chalk = require("chalk");
const http = require("http");
const data = require("./data");

http.createServer((req, res) =>{
    res.writeHead(200, {'content-type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000);

console.log(chalk.bgBlue('successful chalk version @4.0.0'));