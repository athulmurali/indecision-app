// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

// import Options  from './components/Options'

console.log('App.js is running');

const app = {
    title       : 'Indecision App',
    subtitle    :  'let the computer choose your fate!',
    options     :  ["Option one", "option two"]
};

const Layout =(props) =>{
    return(
        <div>
            <p>Header</p>
            <p>{props.children}</p>
            <p>Footer</p>
        </div>)
}

const template= <div>
    <h1>Page Title </h1>
    <p>This is my page</p>
</div>

var appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>,appRoot);       
// ReactDOM.render(<Layout> <p>This is inline p tag content</p></Layout>,appRoot);       