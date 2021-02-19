import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => {

    let body = document.querySelector('body');
    const overFlow = () => {
        body.style = 'overFlow: auto';
        props.close();
    }
    return (
        <div className={classes.Backdrop} onClick={() => overFlow()}>

        </div>
    )
}


export default backdrop;