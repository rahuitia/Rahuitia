import React, { Component } from "react";
import ResourcesEng from './ResourcesEng'
import ResourcesReo from './ResourcesReo'
import { connect } from 'react-redux'

class Resourses extends Component {
  render() {
    return (
      <div>
      {this.props.lang == "eng" ? <ResourcesEng/> : <ResourcesReo/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}
export default connect (mapStateToProps)(Resourses);
