import React, { Component } from "react";
import { connect } from 'react-redux'
import { loginUser, loginError } from '../../actions/login';
// import { Redirect } from 'react-router-dom'

class LoginEng extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  submit(e) {

    e.preventDefault();

    let { email, password } = this.state
    this.props.dispatch(loginUser({ email, password }))
    
    window.location = `/#/explore/`;
    
    // return <Redirect to='/explore' />
    // window.location.replace("/#/explore");
    // window.history.pushState({urlPath:'/#/explore'},"",'explore')
  }

  render() {
    return (

      <div className="logInContainer">

        <form className="login-wrapper" onSubmit={this.submit} noValidate>
          <div className="addDiv">
            <h2 className="loginHeader">Log in</h2>
          </div>

          <div className="addDiv">
            <input className="loginInput" name="email" type="text" placeholder="email" noValidate onChange={this.handleChange} />
          </div>

          <div className="addDiv">
            <input className="loginInput" name="password" type="password" placeholder="password" noValidate onChange={this.handleChange} />
          </div>

          <div className="addDiv">
            <button className="loginButton" name="submit">Log In</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}


export default connect(mapStateToProps)(LoginEng) 