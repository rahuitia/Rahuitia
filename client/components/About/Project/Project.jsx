import React, { Component } from "react";
import ProjectEng from './ProjectEng'
import ProjectReo from './ProjectReo'
import { connect } from 'react-redux'
import SplitterLayout from 'react-splitter-layout';


class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutImage: 'Tahuaroa.png'
    }
  }
  render() {

    return (
    <div>
      {this.props.lang == "eng" ? <ProjectEng/> : <ProjectReo/>}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(Project);


