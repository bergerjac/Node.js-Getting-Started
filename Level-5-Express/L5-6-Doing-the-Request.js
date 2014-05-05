/*
 Doing the Request

 - include the request module
 - print the returned JSON out to the console.
 */

var request = require('request');
var url = require('url');

options = {
    protocol: "http:",
    host: "search.twitter.com",
    pathname: '/search.json',
    query: { q: "codeschool"}
};

var searchURL = url.format(options);

request(searchURL, function(error, response, body)
{
    if (!error && response.statusCode == 200)
    {
        console.log(body); // Print the google web page.
    }
});
