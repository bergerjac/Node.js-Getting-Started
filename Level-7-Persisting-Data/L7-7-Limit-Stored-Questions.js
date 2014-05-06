/*
 Limiting Questions Stored

 Add a callback to the lpush command
 use the ltrim command
 ensure questions list has MAX 20 items

 */

var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client)
{
    redisClient.lrange("questions", 0, -1, function(err, questions)
    {
        questions.forEach(
            function(question)
            {
                client.emit("question", question);
            });
    })

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
