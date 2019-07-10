import { Link } from "react-router-dom";
import React from 'react'

export default function LandingNav() {
    return (
        <React.Fragment>
            <div className="landing-nav-explore-button">
                <Link to="/explore/">Explore</Link>
            </div>
            <div className="landing-nav-login-button">
                <Link to="/login/">Log in</Link>
            </div>
            <div className="landing-nav-register-button">
            <Link to="/register/">Register</Link>
            </div>
        </React.Fragment>
    )
}

