import React from 'react';
import classes from './Images.css';


const images = (props) => {

    const allPhotos = props.photos.map((photo, index) => {
        return (
            <img src={photo.img_src} alt='this is from the rover' key={index} className={classes.Images}/>
        )
    })

    return(
        <div className={classes.ImagesDiv}>
            {allPhotos}
        </div>
    );
}


export default images;