var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOver() {
    return (
        <MainContainer>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start over</button>
            </Link>
        </MainContainer>
    )
}


function Results(props) {

    if(props.isLoading === true) {
        return (
            <Loading speed={100} text='One Moment' />
        )
    }

    if(props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainContainer>
        )
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2 text-center">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Looser">
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
                <StartOver />
            </div>
        </MainContainer>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results;
