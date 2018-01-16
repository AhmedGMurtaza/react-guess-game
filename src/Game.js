import React, { Component, Fragment } from 'react';
import Header from './Header';

class Game extends Component {
    state = {
        bricksVals:[],
        selectedBricks:[],
        total:0,
        target:0,
        result:{ won:0, loss:0 },
        gameCount: 0,
        targetCrossed:false
    }

    componentDidMount() {
        const {target, bricksVals} = this.state;
        if(target === 0 || bricksVals.length < 1){
            this.initializeGame();
        }
    }

    // runs on every state change and button click
    componentDidUpdate(){
        const { target, bricksVals } = this.state;
        //new to run on every brick click
        if(target === 0 || bricksVals.length < 1){
            this.initializeGame();
        }
    }

    restart = () =>{
        this.setState({
            bricksVals:[],
            selectedBricks:[],
            total:0,
            target:0,
            result:{ won:0, loss:0 },
            gameCount: 0,
            targetCrossed:false
        })
        this.initializeGame();
    }

    initializeGame = () => {
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

    // only run when bricks initialized
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

    // when target achieved
    handleResult = (t) => {
        const { target } = this.state;
        
        if(t === target){
            this.setState(prev=>{
                return{ targetCrossed: !prev.targetCrossed }
            })
            setTimeout(()=>{
                this.setState((prev,props)=>{
                    return {
                        result:{
                            won: prev.result.won + 1,
                            loss: prev.result.loss
                        },
                        bricksVals:[],
                        total:0,
                        selectedBricks:[],
                        gameCount : prev.gameCount + 1,
                        targetCrossed:false
                    }
                })
            },2700);
        }
        else if(t > target){
            this.setState(prev=>{
                return{ targetCrossed: !prev.targetCrossed }
            })
            setTimeout(()=>{
                this.setState((prev,props)=>{
                    return {
                        result:{
                            won: prev.result.won,
                            loss: prev.result.loss + 1
                        },
                        total:0,
                        bricksVals:[],
                        selectedBricks:[],
                        gameCount : prev.gameCount + 1,
                        targetCrossed:false
                    }
                })
            },2700);
        }
    }

    // on brick click
    revealBrick = (i) => {
        let {selectedBricks, total, bricksVals, target} = this.state;
        if(!selectedBricks.includes(i)){
            this.setState((prev)=>{
                return {
                    total: prev.total + bricksVals[i]
                }
            });
            
            let t = total + bricksVals[i];
            if(t >= target ){
                this.handleResult(t);
            }
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
            result,
            targetCrossed 
        } = this.state; 
        
        return(
            <Fragment>
            <Header target={target} sum={total} result={result}/>
            <div className="content">
                <div className={`loop-break ${targetCrossed?'':'hide'}`}> <div>
                    <h2>{total===target?'won':'loss'} </h2></div>
                </div>
                <div className={`wrapper ${ gameCount >= 3 ? 'hide' : ''}`}>
                    {
                        bricksVals.map((brick, index) =>
                            <div
                                key={brick + 3}
                                className={`brick ${ selectedBricks.includes(index) ? '' : 'hide'}`}
                                onClick={() => this.revealBrick(index)}
                            >
                                <span>{brick}</span>
                            </div>)
                    }
                </div>
            </div>
                <div className={`scoreboard ${ gameCount >= 3 ? '' : 'hide'}`}>
                    <h2 className="scoreboard-heading">
                        Score Board
                    </h2>  
                    <div className="content">
                    {   result.won === 3? 
                        <h1>Congratulations! You Won</h1> :
                        <h1>You Loss! :(</h1>
                    }
                    <button onClick={this.restart}>Play Again!</button>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Game;
