import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Game extends Component {
    state = {
        won:0,
        failed:0,
        total:0,
        bricksVals:[],
        selectedBricks:[]
    }

    componentDidMount() {
        // random Bricks Values
        const bricksVals = [];
        for (let i = 0; i < 9; i++) {
            let val = Math.floor(Math.random() * 20);
            bricksVals.push(val);
        }
        this.setState({
            bricksVals
        });
    }

    revealBrick = () => {
        this.setState();
    }

    render() {
        const { bricksVals } = this.state; 
        return(
            <div className="wrapper">
                {
                    bricksVals.map(brick => 
                        <div 
                            className="brick"
                            onClick={this.revealBrick}
                        >{brick}</div>)
                }
            </div>
        );
    }
}

export default Game;

const Bricks = () => {
    const bricksCount = [];
    for (let i = 0; i < bricksCount.length; i++) {
        bricksCount.push()
    }
    return null;

}