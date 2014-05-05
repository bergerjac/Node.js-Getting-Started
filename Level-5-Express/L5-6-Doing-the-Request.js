/*
 Doing the Request

 - include the request module
 - print the returned JSON out to the console.
 */

var url = require('url');

options = {
    protocol: "http:",
    host: "search.twitter.com",
    pathname: '/search.json',
    query: { q: "codeschool"}
};

var searchURL = url.format(options);
