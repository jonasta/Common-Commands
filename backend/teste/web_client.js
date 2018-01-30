var http = require("http");
var req = http.request("http://www.google.com/", function(response){
    response.pipe(process.stdout);

});
req.end();