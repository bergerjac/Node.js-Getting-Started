/*
 Get a key

 */

var redis = require('redis');
var client = redis.createClient();// Use redis client

client.get('question', function(error, value)
{// issue a get command
    console.log(value);// retrieve, log value
});
