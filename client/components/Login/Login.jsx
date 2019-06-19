import React, { Component } from 'react'
import { connect } from "react-redux";
import LoginEng from './LoginEng'
import LoginReo from './LoginReo'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        {this.props.lang == "eng" ? <LoginEng {...this.props} /> : <LoginReo {...this.props} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth,
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(Login)