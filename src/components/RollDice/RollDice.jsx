import React, { Component } from 'react';
import Die from '../Die/Die';
import './RollDice.css';

export default class RollDice extends Component {
    constructor() {
        super();
        this.state = {
            dice1: 'four',
            dice2: 'five',
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        const values = ['one', 'two', 'three', 'four', 'five', 'six'];
        let randNum1 = Math.floor(Math.random() * 6);
        let randNum2 = Math.floor(Math.random() * 6);
        this.setState({ dice1: values[randNum1], dice2: values[randNum2], rolling: true });
    }


    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-dice'>
                    <Die value={this.state.dice1} />
                    <Die value={this.state.dice2} />
                </div>
                <button onClick={this.roll} >{this.state.rolling ? 'Rolling..' : 'Roll dice'}</button>
            </div>
        )
    }
}
