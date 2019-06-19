import React, { Component } from "react";
import ApiEng from "./ApiEng";
import ApiReo from "./ApiReo";
import { connect } from "react-redux";

class API extends Component {
  render() {
    return (
      <div>{this.props.lang == "eng" ? <ApiEng /> : <ApiReo />}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  };
}

export default connect(mapStateToProps)(API);
