/*
 Notice the app.js file with the myRequest function below, along with the my_request.js file you can click to open and edit that file. Let's refactor myRequest out to its own myRequest module. You'll want to:
 Move the myRequest function into my_request.js
 Move the http module into my_request.js
 Assign the myRequest function to be exported.
 Require the my_request module in app.
 */

var http = require('http');

var myRequest = function(message)
{
    var request = http.request('http://codeschool.com', function(response)
    {
        response.pipe(process.stdout, { end: false });
    });

    request.write(message);
    request.end();
};

myRequest('Hello, this is dog.'); // Keep this line the same
