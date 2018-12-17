// requiring dependencies
var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
app.listen(PORT, function() {
console.log(`App is listening on port ${PORT}`);
});