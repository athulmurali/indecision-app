import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const OptionModal =(props)=>    
        <Modal
            // isOpen={!!props.selectedOption}
            isOpen={!!props.selectedOption}

            className="modal"

            contentLabel="Selected Option">
                <h3>Hurray!{!!props.clearSelectedOption}</h3>

                <p>{props.selectedOption}</p>
                <button onClick={props.clearSelectedOption}>Okay!</button>


        </Modal>


export default OptionModal