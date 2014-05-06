/*
 Simple Redis Commands

 Let's start practicing using the redis key-value store from our node application.

 */

var redis = require('redis'); // require the redis module
var client = redis.createClient(); // create a redis client

client.set('name', "Jake"); // use the client to set the name key to your name.
