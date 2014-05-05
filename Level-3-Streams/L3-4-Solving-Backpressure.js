/*
 Solving Backpressure

 Even though we know pipe does all the heavy lifting for us when dealing with backpressure,
 it's still a good idea for us to know about what is going on.
 Below, we are copying a file using Readable and Writeable streams.

 Update the code to account for backpressure, without using pipe.
 */

var fs = require('fs');

var file = fs.createReadStream("icon.png");
var newFile = fs.createWriteStream("icon-new.png");

file.on('data', function(chunk)
{
    newFile.write(chunk);
});

file.on('end', function()
{
    newFile.end();
});
