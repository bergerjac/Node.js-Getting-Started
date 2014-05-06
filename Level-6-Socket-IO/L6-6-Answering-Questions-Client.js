/*
 Answering questions

 Clients can also answer each other questions, so let's build that feature by first

 - listening for the 'answer' event on the client
 - will send us both the question and answer
 - want to broadcast out to the rest of the connected clients
 */

var express = require('express');
var socket = require('socket.io');

var app = express.createServer();
var io = socket.listen(app);

io.sockets.on('connection', function(client)
{
    console.log("Client connected...");

    // listen for answers here

    client.on('question', function(question)
    {
        client.get('question_asked', function(err, asked)
        {
            if (!asked)
            {
                client.set('question_asked', true);
                client.broadcast.emit('question', question);
            }
        });
    });
});
