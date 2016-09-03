var React = require('react');
var Results = require('../componments/Results');

var ResultsContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            scores: []
        }
    },
    render: function() {
        return (
            <Results isLoading={this.state.isLoading} scores={this.state.scores} />
        )
    }
});

module.exports = ResultsContainer;
