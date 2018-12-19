var path = require("path");

// exporting the following function to be used in server.js
// displaying the respective html files in response to get requests at routes "/" and "/survey"
module.exports = function (app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    });
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
    });
}