import React, { Component, Fragment } from "react";
import RahuiList from "./RahuiList"
import RahuiListItemReo from "./RahuiListItemReo"
import { connect } from 'react-redux'

class RahuiListReo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <React.Fragment>
                <h1>Tīpakohia ki te ako atu e pā ana ki te Rāhui </h1>
                 {this.props.allrahui.map(rahui => <RahuiListItemReo key={rahui.id} rahui={rahui} /> )}  
          </React.Fragment>
           );
    }
}
function mapStateToProps(state) {
    return {
      lang: state.toggle
    }
  }
  
 
export default connect (mapStateToProps)(RahuiListReo);