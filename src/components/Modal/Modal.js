import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Images from '../Images/Images';
import Loader from '../Loader/Loader';


const Modal = (props) => {

    let body = document.querySelector('body');
    if(props.showImages){
        body.style = 'overFlow: hidden';
    }

    return(
        props.loader ? 
         <div className={classes.Loader}><Backdrop close={props.close}/> <Loader/></div>
         : <div className={classes.Modal}><Backdrop close={props.close}/><Images photos={props.photos}/></div>
    );
}


export default Modal;