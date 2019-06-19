import React, { Component } from "react";

class Landing extends Component {
  constructor (props) {
    super(props);

    this.state = {
        videoURL: 'Farm aerials at sunrise_HD-web.mp4'
    }
  }

  render() {
    return (
    <div> 

      <div className="fullscreen-video-wrap">
        <video id="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
       
        </div>

        

      </div>
    );
  }
}


export default Landing;



