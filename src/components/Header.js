// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    render=()=> 
    <div className="header">
        <h3 className="header_title">{this.props.title}</h3>
        <h1 className="header_subtitle">{this.props.subtitle}</h1>
    </div>   
}

export default Header;