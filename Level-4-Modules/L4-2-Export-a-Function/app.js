/*
 Notice the app.js file with the myRequest function below

 refactor myRequest out to its own myRequest module. You'll want to:

 - Require the my_request module in app.
 */

req = require("./my_request");
req('Hello, this is dog.');
