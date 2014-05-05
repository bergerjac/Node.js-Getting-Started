/*
 Fixing Pipe

 '--File Complete--' will NEVER get printed,
 because pipe automatically closed our process.stdout WritableStream.

 figure out the pipe option which keeps the WriteStream open and dispatches the end event.
 */

var fs = require('fs');
var file = fs.createReadStream('index.html');

file.pipe(process.stdout, { end: false });

file.on("end", function()
{
    console.log('--File Complete--');
});
