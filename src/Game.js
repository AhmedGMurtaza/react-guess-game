import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';

class Game extends Component {
    state = {
        total:0,
        bricksVals:[],
        target:null,
        selectedBricks:[],
        result:{ won:0, loss:0 },
        gameCount: 0
    }

    componentDidUpdate(){
        const {total,target} = this.state;
        if(total >= target ){
            this.handleResult(total);
        }
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

    handleResult = () => {
        const {total, target,result} = this.state;

        if(total === target){
            console.log('won');
            this.setState(prev=>{
                return {
                    result:{
                        won: prev.result.won + 1
                    },
                    total:0,
                    selectedBricks:[],
                    gameCount : prev.gameCount + 1
                }
            })
        }
        else{
            console.log('loss');
            this.setState(prev=>{
                return {
                    result:{
                        loss: prev.result.loss + 1
                    },
                    total:0,
                    selectedBricks:[],
                    gameCount : prev.gameCount + 1
                }
            })
        }

    }

    revealBrick = (i) => {
        let {selectedBricks, total, bricksVals, target} = this.state;
        if(!selectedBricks.includes(i)){
            this.setState((prev)=>{
                return {
                    total: prev.total + bricksVals[i]
                }
            });
            selectedBricks.push(i);
        }
    }

    render() {
        const { 
            bricksVals, 
            target, 
            total, 
            selectedBricks, 
            gameCount, 
            result 
        } = this.state; 
        
        return(
            <div className="content">
                <Header target={target} sum={total} result={result}/>
                <div className={`wrapper ${ gameCount > 3 ? 'hide' : 'show'}`}>
                    {
                        bricksVals.map((brick, index) =>
                            <div
                                key={brick + 3}
                                className={`brick ${(selectedBricks.includes(index))?'show':'hide'}`}
                                onClick={() => this.revealBrick(index)}
                            >
                                <span>{brick}</span>
                            </div>)
                    }
                </div>
                {/* <div className="score" className={`${ gameCount > 3 ? 'hide' : 'show'}`}>
                    <h2>
                        Score Board
                    </h2>  
                    {
                        (result.won === 3)? 
                            <h1>Congratulations! You Won</h1> :
                            <h1>You Loss! :(</h1>
                    }
                </div> */}
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