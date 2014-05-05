/*
 Express Server

 create an express server
 - queries out for this search term
 - returns the json.

 - Require the express module
 - Create the express server 'app'
 - On a get request to '/', pipe the request(searchURL) to the response.
 - listen on port 8080

 */

var url = require('url');
var request = require('request');

options = {
    protocol: "http:",
    host: "search.twitter.com",
    pathname: '/search.json',
    query: { q: "codeschool"}
};

var searchURL = url.format(options);

var app; // Create Server Here
