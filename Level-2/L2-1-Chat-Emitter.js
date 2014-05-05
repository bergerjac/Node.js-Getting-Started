/*
 We're going to create a custom chat EventEmitter.
 Create a new EventEmitter called 'chat',
 listen for 'message' events, and then log the events to the console.
 */

var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
chat.on('message', function(msg)
{
    console.log(msg);
});
