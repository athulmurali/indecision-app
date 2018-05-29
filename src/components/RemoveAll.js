import React from 'react';
import ReactDOM from 'react-dom';
const RemoveAll=(props)=>
        <button className="button--link"
        disabled={!props.hasOptions} 
        onClick= {props.handleRemoveAll}>
        Remove All
        </button>

export default RemoveAll;