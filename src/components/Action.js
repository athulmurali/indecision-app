import React from 'react';
import ReactDOM from 'react-dom';

const Action = (props)=> <button disabled ={!props.hasOptions} onClick={props.handlePick}>Decide my fate!</button>

export default Action;
