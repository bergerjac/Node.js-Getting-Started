/*
 Emitting Stored Questions

 Now that we have questions stored in redis,

 whenever a new client connects (via socket.io) -> emit questions

 Use lrange command
 retrieve array of questions from 'questions' list in redis
 Inside of the lrange callback
 use forEach to loop through each question and emit it on the client
 don't use broadcast.emit (only want to send the questions to the client that is connecting to the server)
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

                redisClient.lpush("questions", question);
            }
        });
    });
});
