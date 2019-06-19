import React from 'react'
import { connect } from "react-redux";
import RegisterEng from "./RegisterEng"
import RegisterReo from "./RegisterReo"
import { loginError } from '../../actions/login';


class Register extends React.Component {
   

    render() {

        return (
          <div>
            {this.props.lang == "eng" ? <RegisterEng /> : <RegisterReo />}
          </div>
            
        )
        }}
    

const mapStateToProps = state => {
    return {
        alliwi: state.iwi,
        area: state.area,
        lang: state.toggle,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Register);