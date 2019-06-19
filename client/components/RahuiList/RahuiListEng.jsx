import React, { Component, Fragment } from "react";
import RahuiList from "./RahuiList"
import RahuiListItemEng from "./RahuiListItemEng"
import { connect } from 'react-redux'

class RahuiListEng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    console.log(this.props.allrahui)
    return (
      <React.Fragment>
        <h1>Explore Rāhui</h1>
        {this.props.allrahui.map(rahui => <RahuiListItemEng key={rahui.id} rahui={rahui} />)}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(RahuiListEng);