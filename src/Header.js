import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1 className="App-title">Guess behind the bricks!</h1>
            <h2>Target: <span>{props.target}</span></h2>
        </header>
    );
}

export default Header;