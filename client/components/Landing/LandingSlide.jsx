import { Link } from "react-router-dom";
import React from 'react'


function LandingSlide(props) {
    return (
        <div className="landing-slide-wrapper">
        <Link to="/explore/">
        <div className="section-slide-landing-main clip-text">
            RĀHUITIA
        </div>
        </Link>
        {props.downIcon == undefined ? "" : props.downIcon}
        </div>
    )
}

export default LandingSlide