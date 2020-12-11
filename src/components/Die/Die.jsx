import React from 'react';
import './Die.css';

export default function Die(props) {
    return (
        <i className={`die fas fa-10x fa-dice-${props.value} ${props.rolling ? 'shaking' : ''}`}></i>
    )
}
