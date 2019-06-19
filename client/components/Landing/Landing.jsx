import React, { Component } from "react";
import LandEng from './LandEng'
import LandReo from './LandReo'
import { connect } from 'react-redux'


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'Farm aerials at sunrise_HD-web.mp4'
    }
  }

  render() {

    return (
      <React.Fragment>
        <div>
          <div className="fullscreen-wrap">
            <video
              id="background-video"
              loop autoPlay muted>
              <source src={this.state.videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img id="mobile-background-image" src="fern1.png" />
          </div>
          <div className="overlayLanding">
            {this.props.lang == "eng" ? <LandEng /> : <LandEng />}
          </div>
          <div className="background-overlay"></div>
        </div>
      </React.Fragment>
    )









  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(Landing);



