var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUsername(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
    getPlayersInfo: function() {
        // Fetch info github then update the state
    }
};

module.exports = helpers;
