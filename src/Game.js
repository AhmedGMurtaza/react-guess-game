import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        for (let i = 0; i < 20; i++) {
            let t = this.checkDuplicate(bricksVals);        
            bricksVals.push(t);
            if(bricksVals.length == 9) break;
        }

        this.setState({
            bricksVals,
            target
        });
    }

    checkDuplicate = (bricksVals) => {
        let val = Math.floor((Math.random() * 15) + 1);
        let na = bricksVals.find(item => item === val);
        console.log(na);
        if(na){
            console.log('if');
            this.checkDuplicate(bricksVals);
        }
        else{
            console.log(na);
            return val;
        }
    }


    revealBrick = (i) => {
        const clickedVal = this.state.bricksVals[i];
        console.log(clickedVal);
    }

    render() {
        const { bricksVals, target } = this.state; 
        return(
            <div className="content">
                <h2>Your Target: <span>{target}</span></h2>
                <div className="wrapper">
                    {
                        bricksVals.map((brick, index) =>
                            <div
                                key={brick}
                                className="brick"
                                onClick={() => this.revealBrick(index)}
                            >{brick}</div>)
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