import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';
import RemoveOption from './RemoveOption';


const Options = (props)=>

    <div>
    <div className="widget-header">

    <h3>Your options </h3>

    </div>
  


    <ol>
        { props.options.map((option)=>
            { return <div  className="option"   key={option}>
                <Option optionText = {option}/>
                <RemoveOption optionText={option} handleRemove= {props.handleRemove}/>  
                </div>  })}
    </ol>
    </div>
     
export default Options;