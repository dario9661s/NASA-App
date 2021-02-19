import React from 'react';
import classes from './Cameras.css';
import CameraImg from '../../assets/camera.png';


const cameras = (props) =>  {

        let cameras = null;

        if(props.cameras){
            cameras = props.cameras.map((camera, index) => {
                return (
                    <li className={classes.Camera} key={index} onClick={() => {
                        const takeOfButton = document.querySelector('#takeOfButton');
                        takeOfButton.scrollIntoView({block: 'end'});
                    }}>
                        <input type='radio' id={'option' + index} name='camera' className={camera.name}/>
                        <label htmlFor={'option' + index}>{camera.name}</label>
                        <div className={classes.Check}></div>
                    </li>
                );
            });
        }

        if(props.takeOf){
            var allRadios = document.querySelectorAll('input[type=radio]');
            allRadios.forEach((radio) => {
                if (radio.checked) {
                    setTimeout(() => {
                        props.camera(radio.className);
                    }, 100);
                }
            })
        }

        return(
            <div className={classes.Cameras} id='CameraDiv'>
                <h1>Next Step: Choose a Camera</h1>
                <div className={classes.CamerasDiv}>
                    <div className={classes.LeftSideCameraDiv}>
                        <img src={CameraImg} alt='a rover camera and how it looks'/>
                        <p>This is the part where you get to choose which <strong>Camera</strong> would you like to see the pictures from planet Mars</p>
                    </div>
                    <ul>
                        {cameras}
                    </ul>
                </div>
                <div className={classes.Divider} style={{margin: '40px auto 100px auto'}}></div>
            </div>
        );

    }



export default cameras;