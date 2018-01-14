import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1 className="App-title">Guess behind the bricks!</h1>
            <div className="score">
                <h2>Target: <span>{props.target}</span></h2>
                <h2>Sum: <span>{props.sum}</span></h2>
                <h3>Won: <span>{props.result.won}</span></h3>
                <h3>Loss: <span>{props.result.loss}</span></h3>
                </div>
            </header>
    );
}

export default Header;