// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    render=()=> 
    <div>
        <h1>{this.props.title}</h1>
    </div>   
}

export default Header;