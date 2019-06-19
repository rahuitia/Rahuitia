import React, { Component } from 'react';
import { connect } from "react-redux";
import DetailEng from "./DetailEng"
import DetailReo from "./DetailReo"
import { fetchAllRahui } from "../../actions/rahui";

class RahuiDetail extends Component {

    handleclick=()=>{
        window.location = `/#/explore`; 
    }

    componentDidMount() {
        this.props.dispatch(fetchAllRahui())
      }
    
    render() { 
        let rahuiId = this.props.match.params.id;
        
        return ( 
            <div>
            {this.props.lang== "eng" ? <DetailEng rahuiId={rahuiId}/> : <DetailReo rahuiId={rahuiId}/>}
            </div>
         );
    }
}
 

const mapStateToProps = state =>{
    return {
        allrahui: state.rahui,
        lang: state.toggle
    }
}
 
export default connect(mapStateToProps)(RahuiDetail);


