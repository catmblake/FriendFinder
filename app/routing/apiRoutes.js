// requiring the userData from friends.js
var userData = require("../data/friends.js");

// exporting the following function to be used in server.js
module.exports = function (app) {
    // setting a get request and response for api/friends
    app.get("/api/friends", function (req, res) {
        res.json(userData);
    }); //setting a post request and response for api/friends
    app.post("/api/friends", function (req, res) {
        // creating newUser variable which holds the user object. newUserScores stores answers in an array 
        var newUser = req.body;
        var newUserScores = req.body.scores;
        // empty array for calculations comparing user's answers with potential friends
        var totalDifference = [];
        // looping through the array of friends and setting scoresDiff to 0 
        for (var i = 0; i < userData.length; i++) {
            var scoresDiff = 0
            // nested loop that calculates difference between newUser scores and each potential friend
            for (var j = 0; j < newUserScores.length; j++) { 
                scoresDiff += Math.abs(userData[i].scores[j] - parseInt(newUserScores[j]));
            };
            // adding the scoresDiff to the totalDifference array
            totalDifference.push(scoresDiff);
        };
        // setting bestMatch to zero
        var bestMatch = 0;
        // looping through total difference array
        for (var i = 0; i < totalDifference.length; i++) {
            if (totalDifference[bestMatch] >= totalDifference[i]) {
                // if the total difference at index of i is less than or equal to
                // total difference at index of bestMatch then set bestMatch to i
                bestMatch = i;
            }
        }
        // declaring bestFriend variable  
        var bestFriend = userData[bestMatch];
        // sending the bestFriend JSON in response to the post request
        res.json(bestFriend);
        // adding the newUser to the userData array of potential friends 
        userData.push(newUser);
    });
};