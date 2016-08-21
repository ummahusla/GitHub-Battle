var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

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
    },
    render: function() {
        return (
            <ConfirmBattle />
        )
    }
});

module.exports = ConfirmBattleContainer;
