import React from 'react'

export default function Icon(props) {
    return (
        <React.Fragment>
            <img src={props.icon} alt="icon" className="icon"/>
        </React.Fragment>
    )
}