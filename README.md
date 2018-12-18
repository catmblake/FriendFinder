# FriendFinder

### Overview
FriendFinder is a compatibility-based friend finding application. Similar to a dating app, this full-stack application creates a profile for each user based on their answers to a survey. It then compare their profile with those from other users. The app finds the person's closest match in the system and displays the name and picture of their recommended friend.

### How FriendFinder Works
Input from the FriendFinder UI is posted to the server where it is stored as a user object containing the user's name, picture link, and an array of their answer scores. The server then takes the user's score and performs calculations comparing their scores to those of other potential friends in the system. From these calculations the server is determining who is the user's best potential friend and then responds to the client with the closest match.

**Front-End Components:**
* HTML pages styled using the Bootstrap CSS Framework
* JavaScript logic for UI functionality
* jQuery library to manipulate html
* AJAX to post form data to the friends API

**Back-End Components:**
* NPM packages Express and Path to create html and api routes that take in requests and respond accordingly
* JavaScript logic for data processing of user input and compatibility calculations

### How To Use FriendFinder
FriendFinder is deployed on Heroku at: https://friend-finder-matching-app.herokuapp.com/. To use the app simply wisit this page and click the link to the survey. Once you submit all of your answers to the survey questions FriendFinder will provide your best friend match.

### FriendFinder In Action
