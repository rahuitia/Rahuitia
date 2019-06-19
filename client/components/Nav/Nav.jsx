import React, { Component } from "react";
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux';
import NavEng from './NavEng'
import NavReo from './NavReo'

export class Nav extends Component {
  
  render() {
    return (
      <div>
        {this.props.lang == "eng" ? <NavEng /> : <NavReo />}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}


export default connect(mapStateToProps)(Nav);

