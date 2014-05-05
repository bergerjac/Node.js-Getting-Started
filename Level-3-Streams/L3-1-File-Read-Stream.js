/*
 File Read Stream

 Use the fs module
 - create a ReadableStream (use fs.createReadStream)
 - read index.html
 - attach callback to 'data' event.
 - - log contents of file
 Tip: don't forget to call toString() on the data chunks inside the callback.
 */

var fs = require('fs');

var inStream = fs.createReadStream("index.html");
inStream.on(
    "data",
    function(chunk)
    {
        console.log(chunk.toString());
    }
);
