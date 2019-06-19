import React from "react";
import RahuiListEng from "./RahuiListEng"
import RahuiListReo from "./RahuiListReo"
import { connect } from "react-redux"

class RahuiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="rahui-text">
        {this.props.lang == "eng" ? <RahuiListEng {...this.props} /> : <RahuiListReo {...this.props} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle,
    rahui: state.rahui
  }
}

export default connect(mapStateToProps)(RahuiList);