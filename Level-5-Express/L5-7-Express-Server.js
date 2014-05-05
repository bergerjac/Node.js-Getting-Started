/*
 Express Server

 create an express server
 - queries out for this search term
 - returns the json.

 */

var url = require('url');
var modrequest = require('request');
var express = require('express');

options = {
    protocol: "http:",
    host: "search.twitter.com",
    pathname: '/search.json',
    query: { q: "codeschool"}
};

var searchURL = url.format(options);

var app = express.createServer();

app.get(
    '/', function(request, response)
    {
        modrequest(searchURL).pipe(response);
    }
);

app.listen(8080);
