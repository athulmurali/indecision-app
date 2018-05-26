import React from 'react';
import ReactDOM from 'react-dom';

class RemoveOption extends React.Component{
 
    handleRemove=(e)=>{
        e.preventDefault();  
        const option = e.target.elements.option.value;
        if (option)  this.props.handleAdd(option);  
        console.log("form submitted");
        return null;
    }
    render=()=>
            <form onSubmit={this.handleRemove}> 
            <input type ="text" name = "option"/>
            <button> Remove option</button>
        </form>
}

export default RemoveOption;