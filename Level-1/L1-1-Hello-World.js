var http = require('http');

http.createServer(
    function(request, response)
    {
        response.writeHead(200);
        response.write("Hello, this is Horace");
        response.end();
    }
).listen(8080);
