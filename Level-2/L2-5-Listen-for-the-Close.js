/*
 Listen for close

 listen for the 'close' event on the server
 - inside the callback,
 - log : "Closing down the server..."
 */

var http = require('http');
var server = http.createServer();

server.on('request', function(request, response)
{
    response.writeHead(200);
    response.write("Hello, this is dog");
    response.end();
});

server.on('request', function(request, response)
{
    console.log("New request coming in...");
});
server.on("close", function()
{
    console.log("Closing down the server...");
});

server.listen(8080);
