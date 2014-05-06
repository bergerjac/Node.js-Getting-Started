/*
 Saving client data I

 allow each client only 1 question at a time, but how do we enforce this rule?

 - use socket.io's ability to save data on the client
 - - whenever question asked
 - - -> check the 'question_asked' value on the client
 - - - - If NOT true
 - - - - -> broadcast question; set the value to true

 */

var express = require('express');
var socket = require('socket.io');

var app = express.createServer();
var io = socket.listen(app);

io.sockets.on('connection', function(client)
{
    console.log("Client connected...");

    client.on('question', function(question)
    {
        client.broadcast.emit('question', question);
    });
});
