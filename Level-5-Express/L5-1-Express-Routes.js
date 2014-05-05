/*
 Express routes

 - Create an express route
 - - responds to GET requests at the URL /tweets
 - - responds with the file tweets.html located in the same directory as app.js
 Make sure you create the app and listen on port 8080
 */

var express = require('express');
var app = express.createServer();

app.get(
    '/tweets', function(request, response)
    {
        response.sendfile(__dirname + "/tweets.html");
    }
);

app.listen(8080);
