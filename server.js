// requiring dependencies
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
// setting the type of data the server can take in
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// requiring the api and html routes and their express functions
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// running the server 
app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}`);
});