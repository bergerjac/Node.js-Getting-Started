/*
 Rendering

 - render quote.ejs template,
 - - pass in quote name, body.
 - finish the quote.ejs view, by printing out the quote name and body.
 */

var express = require('express');
var app = express.createServer();

var quotes = {
    'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
    'berners-lee': 'The Web does not just connect machines, it connects people',
    'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
    'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};
console.log(quotes['einstein']);
console.log(quotes['einstein'].toString());

app.get('/quotes/:name', function(request, response)
{
    var quote = quotes[request.params.name];
    response.render(
        'quote.ejs',
        {
            "name": request.params.name,
            "quote": quote
        }
    );
});

app.listen(8080);

// quote.ejs
/*
 <h2>Quote by <%= name %></h2>

 <blockquote>
 <%= quote %>
 </blockquote>
 */
