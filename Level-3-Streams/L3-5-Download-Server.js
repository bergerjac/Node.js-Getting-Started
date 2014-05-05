/*
 Download Server

 - create a HTTP server
 - - allows you to download the icon.png file.
 - - use 'pipe' to send the read stream into the response
 */

var fs = require('fs');
var http = require('http');

http.createServer(
    function(request, response)
    {
        response.writeHead(
            200,
            {'Content-Type': 'image/png'}
        );

        var file = fs.createReadStream('icon.png');
    }
);
