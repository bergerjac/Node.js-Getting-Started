/*
 Setting up Socket.io server-side

 Below we've already created an express server,
 start building a real-time Q&A moderation service and we've decided to use socket.io.
 Require socket.io and make sure it listens for requests on the express app.
 Also, print out a message to the console whenever a new socket.io client connects to the server.
 */

var express = require('express');
var socket = require('socket.io');

var app = express.createServer();
var io = socket.listen(app);
