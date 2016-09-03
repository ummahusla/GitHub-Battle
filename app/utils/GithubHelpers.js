var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
    // Fetch all repos by username
}

function getTotalStars(stars) {
    // Calculate all the stars that user has
}

function getPlayerData(player) {
    // Get repos
    // geTotalStars
    // return object with that data
}

function calculateScores(players) {
    // Return an array, after calculations in order to determine the winner
}

var helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username);
        })).then(function(info) {
            return info.map(function(user) {
                return user.data;
            });
        }).catch(function(error) {
            console.warn('Error in getPlayersInfo', error);
        });
    },
    battle: function(players) {

    }
};

module.exports = helpers;
