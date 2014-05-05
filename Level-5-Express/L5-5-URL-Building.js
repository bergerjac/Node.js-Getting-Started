/*
 URL Building

 create a page
 - calls the twitter search API
 - displays the last few results for Code School.
 - - construct proper URL

 Complete the URL options which will be sent into the the url module's format method.
 The URL you'll want to construct is the following:

 http://search.twitter.com/search.json?q=codeschool
 */

var url = require('url');

options = {
    // add URL options here
};

var searchURL = url.format(options);
console.log(searchURL);
