import React from 'react';
import Aux from '../../hoc/Auxillarry';
import classes from './Buttons.css';

const buttons = (props) => {

    return (
        <Aux>
            <div className={classes.Buttons}>
            
                    <button 
                        className={classes.Button} 
                        onClick={() => {
                            props.whatRover('Curiosity');
                            props.apiRequest();
                        }}> Curiosity </button>
        
            
                    <button 
                    className={classes.Button} 
                    onClick={() => {
                        props.whatRover('Opportunity');
                        props.apiRequest();
                    }}> Opportunity </button>
                
            
                    <button 
                    className={classes.Button} 
                    onClick={() => {
                        props.whatRover('Spirit');
                        props.apiRequest();
                    }}> Spirit </button>

            </div>
        </Aux>
    );
}


export default buttons;