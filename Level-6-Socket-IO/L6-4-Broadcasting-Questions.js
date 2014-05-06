/*
 Broadcasting questions

 When a question is submitted to our server,
 we want to broadcast it out to all the connected clients so they can have a chance to answer it.

 - listen for 'question' events from clients
 - -> emit the 'question' event on all the other clients connected,
 - - - passing the question data
 */

var express = require('express');
var socket = require('socket.io');

var app = express.createServer();
var io = socket.listen(app);

io.sockets.on('connection', function(client)
{
    console.log("Client connected...");

    // listen here
});
