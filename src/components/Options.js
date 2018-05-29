import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';
import RemoveOption from './RemoveOption';


const Options = (props)=>
    <ol>
        { props.options.map((option)=>
            { return <div  key={option}>
                <Option optionText = {option}/>
                <RemoveOption optionText={option} handleRemove= {props.handleRemove}/>  </div>  })}
    </ol> 
export default Options;