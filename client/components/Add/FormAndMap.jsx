import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import { fetchAllRahui } from "../../actions/rahui";
import ReactMap from "../ReactMap";
import AddRahuiForm from "./AddRahuiForm";

import { isAuthenticated } from "../../utils/auth"


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: null,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchAllRahui())
        this.setState({
            visibility: "list"
        })
    }

    handleClick(e) {
        e.preventDefault()
        const { value } = e.target
        this.setState({
          visibility: value
        });
      }

    render() {
        return isAuthenticated() ? (
            <React.Fragment>
                <div className="mapBackground" style={this.state.visibility == "map" ? {zIndex: 110} : {zIndex: 71}}>
                    <ReactMap />
                </div>
                <div className="overlayNew" style={this.state.visibility == "list" ? {zIndex: 110} : {zIndex: 71}}>
                    <AddRahuiForm />
                </div>
                <div className="explore-buttons">
                        <div className="explore-toggle-button">
                        <button className={this.state.visibility == "list" ? "button-selected" : "button-deselected"} value="list" onClick={this.handleClick}>Details</button>
                        </div>
                        <div className="explore-toggle-button">
                        <button className={this.state.visibility == "map" ? "button-selected" : "button-deselected"} value="map" onClick={this.handleClick}>Map</button>
                        </div>
                </div>        
            </React.Fragment>
        ) : <Redirect to='/register' />
    }
}

const mapStateToProps = state => {
    return {
        allrahui: state.rahui
    }
}

export default connect(mapStateToProps)(Add);
