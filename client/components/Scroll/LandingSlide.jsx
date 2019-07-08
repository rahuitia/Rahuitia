import React from 'react'



function LandingSlide(props) {
    return (
        <div className="slide landing">
            <img className="landing-background-image" src={props.image} alt="Landing Background"/>
            {/* <img className="landing-mask-img" src={props.titleMask} alt="Mask"/> */}
        </div>
    )
}

export default LandingSlide
