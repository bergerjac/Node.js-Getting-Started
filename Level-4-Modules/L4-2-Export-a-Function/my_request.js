/*
 - Move the myRequest function into my_request.js
 - Move the http module into my_request.js
 - Assign the myRequest function to be exported.
 */

var http = require('http');

myRequest = function(message)
{
    var request = http.request('http://codeschool.com', function(response)
    {
        response.pipe(process.stdout, { end: false });
    });

    request.write(message);
    request.end();
};

exports = myRequest;
