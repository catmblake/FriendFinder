var userData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });
    app.post("/api/friends", function (req, res) {
        var newUser = req.body;
        var newUserScores = req.body.scores;
        var scoresArray = [];

        for (var i = 0; i < userData.length; i++) {
            var scoresDiff = 0

            for (var j = 0; j < newUserScores.length; j++) {
                scoresDiff += Math.abs(userData[i].scores[j] -parseInt(newUserScores[j]));
        };
            scoresArray.push(scoresDiff);
    };
        console.log(scoresArray);
        userData.push(newUser);
        res.json(userData);

    });
};