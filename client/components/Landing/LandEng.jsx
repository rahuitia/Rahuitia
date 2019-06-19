import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandEng extends Component {

  render() {
    return (
      <div >
        <div className="landingtext">
          <div className="title">
            <h1>Rāhuitia</h1>
            <h3>Te Kaupapa Rāhuiatia maps Māori knowledge and customs of kaitiakitanga of whenua, moana and tangata</h3>
          </div>
          <br></br>
          <Link to="/explore">
            <button className="landing-arrow"><img src="arrow.png"/></button>
          </Link>
          {/* <div className="explore-button">
          <Link to="/explore"><img src="explore-waka.png" alt="" className="explore-waka"/></Link>
          </div> */}
          <br></br>
          <div className="landing-buttons">
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LandEng

{/* <object className="explore-waka" data="explore-waka.svg" type="image/svg+xml"></object> */}
{/* <img src="explore-waka.png" alt="" className="explore-waka"/> */}