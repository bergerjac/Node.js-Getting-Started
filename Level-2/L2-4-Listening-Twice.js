/*Listening Twice

 Who said you can only listen for an event once?
 Add another listener to the server's request event after our current callback.
 second listener
 - callback : log "New request coming in..."
 - to the console on the 'request' event
 */

var http = require('http');

var server = http.createServer();
server.on(
    'request',
    function(request, response)
    {
        response.writeHead(200);
        response.write("Hello, this is dog");
        response.end();
    }
);
server.on(
    "request",
    function(request, response)
    {
        console.log("New request coming in...");
    }
);
server.listen(8080);
