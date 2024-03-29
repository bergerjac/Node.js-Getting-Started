/*
 refactor the http server code to explicitly bind a callback to the request event
 - using the on function.
 */

var http = require('http');

var server = http.createServer();
server.on(
    "request",
    function(request, response)
    {
        response.writeHead(200);
        response.write("Hello, this is dog");
        response.end();
    }
);

server.listen(8080);
