import React, { Component } from 'react';
import classes from './App.css';
import Buttons from './components/Buttons/Buttons';
import Layout from './hoc/Layout/Layout';
import axios from './AxiosInstances';
import Aux from './hoc/Auxillarry';
import Logo from './components/Logo/Logo';


class App extends Component {

    state = {
      apiKey: 'api_key=w2HReOgRTs1uQgsrYYSG4E00cgY42dRVFLUNpaXh',
      data: null,
      roverName: null,
      cameras: null,
      roverInfo: null,
      request: false
    }

    gettingRoverHandler = (rover) => {
        this.setState({roverName: rover});
    }

    requestHandler = () => {
      this.setState({request: true});
      setTimeout(() => {
        axios.get(this.state.roverName + '?' + this.state.apiKey).then((response) => {
          let data = response.data;
          console.log(data.rover);
          this.setState({data: data, roverName: data.rover.name, cameras: data.rover.cameras, roverInfo: data.rover});
        }).catch((err) => {
          alert('Something went Wrong:  from the App.js', err.message);
        });
      }, 500)
    }

    render() {

      let layout = null;
      if(this.state.data){
        layout = <Layout roverInfo={this.state.roverInfo} cameras={this.state.cameras} roverName={this.state.roverName} apiKey={this.state.apiKey}/>
        setTimeout(() => {
          const infoDiv = document.querySelector('#info-div');
          infoDiv.scrollIntoView({block: 'center'});
        }, 200);
      }

      return (
        <Aux>
            <div className={classes.BackGround}></div>
            <div className={classes.App}>
            <Logo/>
              <h1 className={classes.AppH1}>NASA currently has 3 rovers on planet Mars</h1>
              <div className={classes.DivParagraph}>
                  <p>- The 3 rovers are sent to take photos of the planet Mars.</p>
                  <p>- In order for you to see these photos, you have to folow the steps.</p> 
                  <p>- <strong>First WISELY choose which rover would you like to inspect?</strong></p>
              </div>
              <Buttons whatRover={this.gettingRoverHandler} apiRequest={this.requestHandler}/>
              {layout}
            </div>
        </Aux>
      );
    }
}

export default App;
