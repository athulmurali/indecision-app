// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';


import Header           from './Header'
import Action           from './Action'
import Option           from './Option'
import AddOption        from './AddOption'
import Options          from './Options'
import RemoveOption     from './RemoveOption'
import RemoveAll        from './RemoveAll'
import OptionModal      from './OptionModal'

class IndecisionApp extends React.Component {

    state = {
        options     :  [],
        pickDisabled : false,
        selectedOption: undefined
       };

       componentDidMount(){
        console.log("Component Mounted");
    }
       componentDidUpdate(){
           console.log("Component Updated");
       }

    handlePick=()=>
    {
        const result = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[result]
        this.setState((state)=>{
                return {
                    selectedOption:option
                }
        });
        console.log(option);

    }
    handleAdd=(option)=>{
        this.setState((prevState)=>{
 
            return {
                options : prevState.options.concat([option])
            };
        });
        console.log("option added");
    }

    handleRemove=(option)=>{

        console.log("trying to remove option  : "+ option);
        this.setState((state)=>{
            console.log("resetting state options");
            var oldOptions = this.state.options;
            var     newOptions = oldOptions.filter(function(val){return val != option });
            return {options:  newOptions }
        } )
   
    }

    handleRemoveAll=()=>{
    console.log("handle remove all called");
     console.log(this.state.options);
     this.setState((state)=>{
         console.log("resetting state options");
         return {options:[]}} )
     }
     handleClearSelection=()=>{
         this.setState((state)=>{
          
                console.log("clearing selected option!");

                return {selectedOption: undefined}
            
         });
     }
 
     render()
     {
        return( 
        <div>
        <div className="container">
         <Header title ="Indecision App" subtitle="Random selection for randos!"/>
         </div>

         <div className="container">
         <Action handlePick              = {this.handlePick} hasOptions= {this.state.options.length > 0}/>
         <RemoveAll handleRemoveAll      = {this.handleRemoveAll} hasOptions= {this.state.options.length > 0} selectedOption={this.state.selectedOption}/>

         <Options options                = {this.state.options} handleRemove = {this.handleRemove}/>
         <AddOption handleAdd            = {this.handleAdd}/>
         </div>

         
         
         <OptionModal 
         clearSelectedOption = {this.handleClearSelection}
         selectedOption={this.state.selectedOption}
         />
         </div>);}
 
 
 }
 export default IndecisionApp;