/*
 Get a key

 - Use redis client
 - issue a get command
 - - retrieve, log value

 */

var redis = require('redis');
var client = redis.createClient();
