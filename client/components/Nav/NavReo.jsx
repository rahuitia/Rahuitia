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
      <li><Link className="nav-links" to="/addrahui/">Tāpirihia he Rāhui</Link></li>
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

// import React, { Component } from "react";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
// import { connect } from 'react-redux';
// import { removeUser, isAuthenticated } from '../../utils/auth'
// import { receiveLogout } from "../../actions/login";
// import { toggleLang } from "../../actions/toggle";

// class NavReo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };

//     this.handleSubmit = this.handleSubmit.bind(this)

// }

// handleSubmit(e) {
//   removeUser()
//   this.props.logout()
//   window.location = `/#/`
// }

//   render() {
//     return (
//     <header className="header">
//       <Link className="logo" to="/">Rāhuitia</Link>
//       <input className="menu-btn" type="checkbox" id="menu-btn" />
//       <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
//       <ul className="menu">
//       <li><Link className="ToggleLanguageButton" to="#" onClick={() => this.props.toggleLang()}>
//       English</Link></li>
//       <li><Link to="/explore/">Torohē</Link></li>
//       <li><Link to="/about/">Pēwhea</Link></li>
//       <li><Link to="/addrahui/">Tāpirihia he Rāhui</Link></li>
//       <li>{this.props.isAuthenticated ? <Link to="#" onClick={this.handleSubmit}>Takiputa</Link> : <Link to="/login/">Takiuru</Link> }</li>
//       </ul>
//     </header>
//     )
//   }
// }


// function mapDispatchToProps(dispatch) {
//   return {
//     logout: () => dispatch(receiveLogout()),
//     toggleLang: () => dispatch(toggleLang())
//   }
// }

// function mapStateToProps(state) {
//   return {
//     isAuthenticated: state.auth.isAuthenticated,
//     lang: state.toggle
//     }
//   }


// export default connect(mapStateToProps, mapDispatchToProps)(NavReo)


// import React, { Component } from "react";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
// import { connect } from 'react-redux';
// import { removeUser, isAuthenticated } from '../../utils/auth'

// class ToggleReo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };

//     this.handleSubmit = this.handleSubmit.bind(this)

//   }

//   handleSubmit(e) {
//     removeUser()
//     this.props.logout()
//     window.location = `/#/`
//   }

//   render() {
//     return (
//       <header className="header">
//         <Link className="logo" to="/">Rāhuitia</Link>
//         <input className="menu-btn" type="checkbox" id="menu-btn" />
//         <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
//         <ul className="menu">
//           <li><Link to="/explore/">Torohē</Link></li>
//           <li><Link to="/about/">Pēwhea</Link></li>
//           <li><Link to="/addrahui/">Tāpirihia he Rāhui</Link></li>
//           <li>{this.props.isAuthenticated ? <Link to="#" onClick={this.handleSubmit}>Takiputa</Link> : <Link to="/login/">Takiuru</Link> }</li>
//         </ul>
//       </header>
//     )
//   }
// }

// function mapStateToProps(state) {
//   return {
//     lang: state.toggle
//   }
// }


// export default connect(mapStateToProps)(ToggleReo)