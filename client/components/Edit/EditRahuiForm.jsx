import React from 'react'
import { connect } from 'react-redux'
import EditRahuiFormEng from './EditRahuiFormEng'
import EditRahuiFormReo from './EditRahuiFormReo'

class EditRahuiForm extends React.Component{
    render() {
        return (
           <div className="rahui-text">               
            {this.props.lang == "eng" ? <EditRahuiFormEng rahuiId={this.props.rahuiId}/>  : <EditRahuiFormReo rahuiId={this.props.rahuiId}/>}
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      lang: state.toggle
    }
  }

 export default connect(mapStateToProps)(EditRahuiForm);

