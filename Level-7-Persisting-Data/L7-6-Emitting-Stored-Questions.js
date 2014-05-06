/*
 Emitting Stored Questions

 Now that we have questions stored in redis,

 whenever a new client connects (via socket.io) -> emit questions

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
    var questions = redisClient.lrange('questions', 0, -1, function(error, questions)
    {// Use lrange command, retrieve from 'questions'
        questions.forEach(// use forEach
            function(question)
            {
                client.emit('question', question);// emit each question to client
            });
    });

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
