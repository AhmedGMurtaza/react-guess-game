import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';

class Game extends Component {
    state = {
        won:0,
        failed:0,
        total:0,
        bricksVals:[],
        target:null,
        selectedBricks:[]
    }

    componentDidMount() {
        // target number
        const target = Math.floor((Math.random()*27) + 1);

        // random Bricks Values
        const bricksVals = [];
        for (let i = 0; i < 9; i++) {
            let t = this.checkDuplicate(bricksVals);        
            bricksVals.push(t);
        }

        this.setState({
            bricksVals,
            target
        });
    }

    checkDuplicate = (bricksVals) => {
        let val = Math.floor((Math.random() * 15) + 1),
            na = bricksVals.find(item => item === val);
        if(na){
            return this.checkDuplicate(bricksVals);
        }
        else{
            return val;
        }
    }


    revealBrick = (i) => {
        i -= 3;
        const clickedVal = this.state.bricksVals[i];
    }

    render() {
        const { bricksVals, target } = this.state; 
        return(
            <div className="content">
                <Header target={target} />
                <div className="wrapper">
                    {
                        bricksVals.map((brick, index) =>
                            <div
                                key={brick + 3}
                                className={`brick`}
                                onClick={() => this.revealBrick(index)}
                            >
                                <span>{brick}</span>
                            </div>)
                    }
                </div>
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