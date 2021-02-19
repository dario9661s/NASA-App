import React, { Component } from 'react';
import './Input.css';
import classes from './Input.css';


class Input extends Component {

    state = {
        inputValue: 1
      }

    nameChangeHandler = (event) => {
        let change = event.target.value;
        this.setState({inputValue: change});
        }
    
    render() {

        if(this.props.takeOf){
            let sol = this.state.inputValue;
            setTimeout(() => {
                this.props.sol(sol)
            }, 100);
        }

        return(
            <div className={classes.InputDivContainer} id='InputDiv'>
                <h1>Next Step: Choose a Sol</h1>
                <div className={classes.ContentDiv}>
                    <div className={classes.TextDiv}>
                        <h2 style={{textShadow: '0 0 1px black'}}>Why do you choose in Sol's?</h2>
                        <p>- <strong>Sols</strong>, or Martian solar days, are 39 minutes and 35 seconds longer than Earth days, and there are 668 sols <br/>(687 Earth days) in a Martian year. <br/>For convenience, sols are divided into<br/>the 24-hour clock. <strong>Choose Wisely!</strong></p>
                    </div>
                    <div className={classes.InputDiv}>
                        <input type='text' value={this.state.inputValue} readOnly/>
                        <input type='range' min='1' max={this.props.roverInfo.max_sol} onChange={(event) => this.nameChangeHandler(event)}/>
                    </div>
                </div>
                <div className={classes.Divider}></div>
            </div>
        );

    }

}


export default Input;