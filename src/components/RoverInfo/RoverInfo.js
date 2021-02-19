import React from 'react';
import classes from './RoverInfo.css';
import Aux from '../../hoc/Auxillarry';


const roverInfo = (props) => {

    const hello = true;

    let roverPhoto = null;
    switch (hello) {
        case (props.roverInfo.name === 'Curiosity'):
            roverPhoto = <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2019%2F06%2FAdobeStock_270972626-1200x700.jpg' alt='this is a rover'/>;
            break;
        case (props.roverInfo.name === 'Opportunity'):
            roverPhoto = <img src='https://i2.wp.com/pcpress.rs/wp-content/uploads/2018/09/rover.jpg?fit=800%2C450&ssl=1' alt='this is a rover'/>;
            break;
        case (props.roverInfo.name === 'Spirit'):
            roverPhoto = <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Curiosity_at_Work_on_Mars_%28Artist%27s_Concept%29.jpg/1200px-Curiosity_at_Work_on_Mars_%28Artist%27s_Concept%29.jpg' alt='this is a rover'/>;
            break;
        default:
            roverPhoto = null;
        }

    return (
        <Aux>

            <div className={classes.RoverInfoDiv} id='info-div' onClick={() => {
                const CameraDiv = document.querySelector('#CameraDiv');
                CameraDiv.scrollIntoView({block: 'center'});
            }}>
                <div className={classes.ImgDiv}>
                        {roverPhoto}
                </div>
                <div className={classes.Content}>
                    <h1>{props.roverInfo.name.toUpperCase()}</h1>
                    <ul>
                        <li>This rover was Launched on {props.roverInfo.launch_date}</li>
                        <li>The Landing on Mars occured on {props.roverInfo.landing_date}</li>
                        <li>The Sol's that this rover on Mars is: {props.roverInfo.max_sol}</li>
                        <li>{props.roverInfo.total_photos} photos was taken by this rover</li>
                    </ul>
                </div>
            </div>
            <div className={classes.Divider}></div>
        </Aux>
    );
}


export default roverInfo;