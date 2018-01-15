import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1 className="App-title">Guess behind the bricks!</h1>
            <div className="score">
                <h2>Target: <span>{props.target}</span></h2>
                <h2>Sum: <span>{props.sum}</span></h2>
                <div className="result-bar">
                    <h2>Won: <span>{props.result.won}</span></h2>
                    <h2>Loss: <span>{props.result.loss}</span></h2>
                </div>
            </div>
            </header>
    );
}

export default Header;

Header.PropTypes = {
    target: PropTypes.number,
    sum: PropTypes.number,
    won: PropTypes.won,
    loss: PropTypes.loss
}