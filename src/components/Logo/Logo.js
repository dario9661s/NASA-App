import React from 'react';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img className={classes.Logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png' alt='this is NASA'/>
            <h1 className={classes.LogoH1}>Welcome to NASA space agency</h1>
        </div>
    );
}


export default logo;