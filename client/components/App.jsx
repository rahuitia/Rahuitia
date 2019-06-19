import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { fetchAllRahui } from "../actions/rahui";

import Landing from "./Landing/Landing";
import Nav from "./Nav/Nav";

import Explore from "./Explore/Explore";

import RahuiDetail from "./RahuiDetail/RahuiDetail";
import About from "./About/About";

import Login from "./Login/Login";
import Add from "./Add/FormAndMap";
import Register from "./Register/Register";
import Edit from "./Edit/EditFormAndMap";


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     page:null
  //   }
  // }

  componentDidMount() {
    this.props.dispatch(fetchAllRahui())
  }

  render() { 
  let page = this.props;
  console.log(page)
  return (
    <div>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/(.+)" render={(() => <Nav /> )}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/AddRahui" component={Add} />
        <Route exact path="/rahui/:id/edit" component={Edit}/>       
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/rahui/:id" component={RahuiDetail} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}
}

const mapStateToProps = state =>{
  return {
      auth: state.auth,
      allrahui: state.rahui,
      lang: state.toggle
  }
}

export default connect(mapStateToProps)(App);


