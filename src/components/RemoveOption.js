import React from 'react';
import ReactDOM from 'react-dom';

class RemoveOption extends React.Component{
 
    handleRemove=()=>{
        console.log("inside handleRemove()");
        console.log(this.props);
        console.log(this.props.optionText);
        this.props.handleRemove(this.props.optionText);
        
        return null;
    }
    render=()=>
            <button className ="button--link" onClick={this.handleRemove}>X</button>
        }

export default RemoveOption;