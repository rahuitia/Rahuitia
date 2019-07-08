import React from 'react'

function Slide(props) {
    return (
        <div className="section slide landing">
            <img className="landing-background-image" src={props.image} alt="Landing Background"/>
            {/* <p className="landing-text">{props.SlideText}</p> */}
        </div>
    )
}

export default Slide