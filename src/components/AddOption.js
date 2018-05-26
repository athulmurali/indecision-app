import React from 'react';
import ReactDOM from 'react-dom';


class AddOption extends React.Component{

    handleAdd=(e)=>{
        e.preventDefault();  
        const option = e.target.elements.option.value;
        if (option)  this.props.handleAdd(option);  
        console.log("form submitted");
        return null;
    }
    render=()=>
    <form onSubmit={this.handleAdd}> 
    <input type ="text" name = "option"/>
    <button> Add option</button>
    </form>
}
export default AddOption;