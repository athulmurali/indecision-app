import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';

const Options = (props)=>
    <ol>
        { props.options.map((option)=>{ return <Option key={option} optionText = {option}/>  })}   
    </ol> 


export default Options;