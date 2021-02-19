import React, { Component } from 'react';
import classes from './Layout.css';
import Input from '../../components/Input/Input';
import Cameras from '../../components/Cameras/Cameras';
import RoverInfo from '../../components/RoverInfo/RoverInfo';
import axios from '../../AxiosInstances';
import Modal from '../../components/Modal/Modal';
import NasaLetter from '../../assets/nasaLetter.png';


class Layout extends Component {

    state= {
        apiKey: this.props.apiKey,
        takeOfbuttonClicked: false,
        roverName: this.props.roverName,
        cameraName: null,
        sol: null,
        roverPhotos: [],
        showImages: false,
        pickingUpData: false
    }

    clickedButtonHandler = () => {
        this.setState({takeOfbuttonClicked: true, pickingUpData: true});
        setTimeout(() => {
            axios.get(this.state.roverName + '/photos?sol=' + this.state.sol + '&camera=' + this.state.cameraName + '&' + this.state.apiKey).then((response) => {
                let newPhotos = response.data.photos;
                if(newPhotos.length > 0){
                    this.setState({roverPhotos: response.data.photos, showImages: true, takeOfbuttonClicked: false});
                }else{
                    alert('Sorry, no photos were taken on that particular day with that particular camera... Pick again! Sometimes it takes a while to get it right...');
                    this.setState({takeOfbuttonClicked: false, roverPhotos: null});
                    const CameraDiv = document.querySelector('#CameraDiv');
                    CameraDiv.scrollIntoView({block: 'center'});
                }
                console.log(this.state.roverPhotos);
            }).catch((err) => {
                alert('Something Went Wrong: ' + err.message);
            })
        }, 800);
    }

    takingCameraName = (camera) => {
        this.setState({pickingUpData: false});
        if(camera !== null){
            this.setState({cameraName: camera.toLowerCase()});
            console.log(this.state.cameraName + " from the layout");
        }
    }

    takingSol = (sol) => {
        this.setState({sol: sol, pickingUpData: false});
        console.log(this.state.sol + " from the layout");
    } 

    showImageHandler = () => {
        let updateState = !this.state.showImages
        this.setState({showImages: updateState});
    }


    render() {

        let images = null;

        if(this.state.showImages || this.state.takeOfbuttonClicked){
            images = <Modal showImages={this.state.showImages} photos={this.state.roverPhotos} close={this.showImageHandler} loader={this.state.takeOfbuttonClicked}/>;
        }
        

        return (
            <div className={classes.Layout}>
                <div className={classes.DivImage}><span></span><span><img src={NasaLetter} alt='The oficial Nasa'/></span><span></span></div>
                            
                            <RoverInfo roverInfo={this.props.roverInfo}/>
                            <Cameras cameras={this.props.cameras} takeOf={this.state.pickingUpData} camera={this.takingCameraName}/>
                            <Input roverInfo={this.props.roverInfo} takeOf={this.state.pickingUpData} sol={this.takingSol}/>
                            <div id='takeOfButton'>
                                <button onClick={this.clickedButtonHandler} className={classes.TakeOfButton}><i className="fas fa-rocket"></i><span className={classes.ButtonSpan}>Take Off!</span></button>
                            </div>

                            {images}

            </div>
        );
    }
}



export default Layout;