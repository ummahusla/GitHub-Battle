var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var GithubHelpers = require('../utils/GithubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: true,
            playerInfo: []
        };
    },
    componentDidMount: function() {
        // Fetch info github then update the state
        var query = this.props.location.query;
        GithubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function(players){
                console.log("Players", players);
            });
    },
    render: function() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
            />
        )
    }
});

module.exports = ConfirmBattleContainer;
