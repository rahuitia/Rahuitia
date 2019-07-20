import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { removeUser, isAuthenticated } from '../../utils/auth'
import { receiveLogout } from "../../actions/login";
import { toggleLang } from "../../actions/toggle";

class NavReo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerNav: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
}

  handleSubmit(e) {
    removeUser()
    this.props.logout()
    window.location = `/#/`
  }

handleClick() {
  let expand = this.state.hamburgerNav == "active" ? "" : "active"; 
  this.setState({
    hamburgerNav: expand
  })
}

  render() {
    return (
      <div id="nav" className={this.state.hamburgerNav} onClick={this.handleClick}>
        <div className="rahuitia-logo"><Link to="/">Rāhuitia</Link></div>
        <div className="translate-icon"><Link to="#" onClick={() => this.props.toggleLang()}>|    English</Link></div>
      <div id="close">
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div id="nav-items">
      <ul>
      <li>{this.props.isAuthenticated ? <Link className="nav-links" to="#" onClick={this.handleSubmit}>Takiputa</Link> : <Link className="nav-links" to="/login/">Takiuru</Link> }</li>
      <li><Link className="nav-links" to="/about/">Pēwhea</Link></li>
      <li><Link className="nav-links" to="/explore/">Torohē</Link></li>
      <li>{isAuthenticated() ? <Link className="nav-links" to="/addrahui/">Tāpirihia he Rāhui</Link> : <Link className="nav-links" to="/register">Rēhita</Link>}</li>
      </ul>
      </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(receiveLogout()),
    toggleLang: () => dispatch(toggleLang())
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    lang: state.toggle
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavReo)
