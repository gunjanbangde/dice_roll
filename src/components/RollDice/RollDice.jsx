import React, { Component } from 'react';
import Die from '../Die/Die';
import './RollDice.css';

export default class RollDice extends Component {
    constructor() {
        super();
        this.state = {
            dice1: 'six',
            dice2: 'six',
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        const values = ['one', 'two', 'three', 'four', 'five', 'six'];
        let randNum1 = Math.floor(Math.random() * 6);
        let randNum2 = Math.floor(Math.random() * 6);
        this.setState({ dice1: values[randNum1], dice2: values[randNum2], rolling: true });
        setTimeout(() => { this.setState({ rolling: false }); }, 1000)
    }


    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-dice'>
                    <Die value={this.state.dice1} rolling={this.state.rolling} />
                    <Die value={this.state.dice2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling} >{this.state.rolling ? 'Rolling..' : 'Roll dice'}</button>
            </div>
        )
    }
}
