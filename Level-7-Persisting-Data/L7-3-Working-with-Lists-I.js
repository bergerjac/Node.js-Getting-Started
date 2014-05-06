/*
 Working with Lists I

 use redis client's lpush command
 - insert the two questions below into the questions list

 */

var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush('questions', question1, function(error, reply)
{

});
client.lpush('questions', question2, function(error, reply)
{

});
