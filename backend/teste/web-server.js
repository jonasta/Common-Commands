var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    if (req.url==='/dados.txt'){
        fs.createReadStream(__dirname + '/dados.txt').pipe(res);
    }else{
        res.write("index");
        res.end();
    }
});
server.listen(8888);
console.log("server running");