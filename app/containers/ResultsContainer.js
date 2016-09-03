var React = require('react');
var Results = require('../components/Results');
var GithubHelpers = require('../utils/GithubHelpers');

var ResultsContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function() {
        GithubHelpers.battle(this.pros.location.state.playerInfo)
            .then(function (scores) {
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            }.bind(this))
    },
    render: function() {
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores}
            />
        )
    }
});

module.exports = ResultsContainer;
