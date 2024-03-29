/*
 Our original Hello server can be shortened since the response.end() function optionally takes data as a parameter.
 Remove the 'response.write' line all together, and send the hello string as a parameter on the response.end function.
 This will send the data, and once finished add the end to the response.
 Ex: response.end("blah")
 */

var http = require('http');

http.createServer(
    function(request, response)
    {
        response.writeHead(200);
        response.end("Hello, this is dog");
    }
).listen(8080);
