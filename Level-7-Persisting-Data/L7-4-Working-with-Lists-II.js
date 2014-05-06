/*
 Working with Lists II

 use the lrange command to return all of the items
 log them.
 */

var redis = require('redis');
var client = redis.createClient();

client.lrange('questions', 0, -1, function(error, questions)
{
    questions.forEach(
        function(question)
        {
            console.log(question);
        }
    );
});
