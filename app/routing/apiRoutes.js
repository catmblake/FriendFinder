var userData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/survey", function (req, res) {
        res.json(userData);
    });
    app.post("/api/friends", function (req, res) {
        var user = req.body;
        userData.push(user);
        res.send(userData);
    });
    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });
};