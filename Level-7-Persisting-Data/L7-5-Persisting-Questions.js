/*
 Persisting Questions

 Let's go back to our live-moderation app and add some persistence, first to the questions people ask.

 Use lpush command
 add new questions to the list named 'questions'
 Do inside the question listener

 */

var express = require('express');
var socket = require('socket.io');
var redis = require('redis');

var app = express.createServer();
var io = socket.listen(app);
var redisClient = redis.createClient();

io.sockets.on('connection', function(client)
{
    client.on('answer', function(question, answer)
    {
        client.broadcast.emit('answer', question, answer);
    });

    client.on('question', function(question)
    {
        client.get('question_asked', function(asked)
        {
            if (!asked)
            {
                client.set('question_asked', true);
                client.broadcast.emit('question', question);

                // add the question to the list here
            }
        });
    });
});
