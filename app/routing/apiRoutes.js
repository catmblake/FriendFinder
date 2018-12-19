// requiring the friends from friends.js
var friends = require("../data/friends.js");

// exporting the following function to be used in server.js
module.exports = function (app) {
    // setting a get request and response for api/friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    }); //setting a post request and response for api/friends
    app.post("/api/friends", function (req, res) {
        // creating user variable which holds the user object. newUserScores stores answers in an array 
        var user = req.body;
        var userScores = req.body.scores;
        // empty array for calculations comparing user's answers with potential friends
        var totalDifference = [];
        // looping through the array of friends and setting scoresDiff to 0 
        for (var i = 0; i < friends.length; i++) {
            var scoresDiff = 0
            // nested loop that calculates difference between user scores and each potential friend
            for (var j = 0; j < userScores.length; j++) { 
                scoresDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
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
        var bestFriend = friends[bestMatch];
        // sending the bestFriend JSON in response to the post request
        res.json(bestFriend);
        // adding the user to the friends array of potential friends 
        friends.push(user);
    });
};