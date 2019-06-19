import React from 'react'
import { connect } from 'react-redux'
import AddRahuiFormEng from './AddRahuiFormEng'
import AddRahuiFormReo from './AddRahuiFormReo'

class AddRahuiForm extends React.Component{
    render() {
        return (
           <div className="rahui-text">               
                {this.props.lang == "eng" ? <AddRahuiFormEng /> : <AddRahuiFormReo />}
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      lang: state.toggle
    }
  }

 export default connect(mapStateToProps)(AddRahuiForm);