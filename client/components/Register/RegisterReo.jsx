import React from 'react'
import { connect } from "react-redux";
import { registerUserRequest } from '../../actions/register'
import { fetchAllIwi } from "../../actions/iwi";
import { loginError } from '../../actions/login';

class RegisterReo extends React.Component {
  constructor() {
    super()
    this.state = {
      first_name: null,
      middle_name: null,
      last_name: null,
      region: [],
      iwi: [],
      hapu: [],
      address: null,
      email: null,
      password: null,
      confirm_password: null,
      iwiSelected: null,
      hapuSelected: null,
      regionSelected: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelect2 = this.handleSelect2.bind(this);
    this.handleSelect3 = this.handleSelect3.bind(this);
    this.submit = this.submit.bind(this);
    this.submitAdd = this.submitAdd.bind(this);
    this.renderHapu = this.renderHapu.bind(this);
    this.renderIwi = this.renderIwi.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchAllIwi())
  }

  handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  submit(e) {
    e.preventDefault()

    let { first_name, middle_name, last_name, address, email, password, confirm_password, iwi, hapu } = this.state

    if (confirm_password != password) {
      return this.props.dispatch(loginError("Passwords don't match"))
      console.log("Login Error- Passwords dont match")
    } else {
      this.props.dispatch(registerUserRequest({ first_name, middle_name, last_name, address, email, password, iwi, hapu }))
    }
    console.log("registered")
    window.location = `/#/addrahui`
  }

  submitAdd() {
    let region = [...this.state.region, this.state.regionSelected]
    let iwi = [...this.state.iwi, this.state.iwiSelected]
    let hapu = [...this.state.hapu, this.state.hapuSelected]

    this.setState({
      region: [...new Set(region)],
      iwi: [...new Set(iwi)],
      hapu: [...new Set(hapu)],
      regionSelected: null,
      iwiSelected: null,
      hapuSelected: null
    })
    console.log(this.state)
  }

  handleSelect(event) {
    this.setState({
      regionSelected: event.target.value,
    });
  }

  handleSelect2(event) {
    this.setState({
      iwiSelected: event.target.value,
    });
  }

  handleSelect3(event) {
    this.setState({
      hapuSelected: event.target.value,
    });
  }

  renderIwi() {
    const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]

    if (allIwiInRegion.length > 0) {
      return allIwiInRegion.map(iwi => {
        return < option htmlFor="iwi" > {Object.keys(iwi)[0]}</option >
      })
    }
  }
  renderHapu() {
    const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]
    const iwiIWant = this.state.iwiSelected
    const theIwiIFound = allIwiInRegion.filter(iwi => {
      return iwi[iwiIWant] != undefined
    })
    const allHapu = theIwiIFound[0][iwiIWant]
    if (allHapu.length > 0) {
      return allHapu.map(hapu => {
        return <option htmlFor="hapu">{hapu}</option>;
      })
    }
    else (<option>No hapū</option>)
  }
  render() {
    return (
      <div className="registerContainer">
        <div className="registerCenter">
          <div className="addIntroDiv">
            <h2>Rēhita</h2>
            <div className="addDiv">
              <p>Ekore e tika kia noho he Maori rawakore ki tenei whenua; ehara tenei i te mea e ora ai tatou e tika ai ranei ratou. </p>
            </div>
          </div>

          <form className="register-form" onSubmit={this.submit}>
            <div className="addDiv">
              <p className="detailsHeading">Full name:</p>
              <input className="inputRegister" name="first_name" type="text" placeholder="ingoa tuatahi" noValidate onChange={this.handleChange} />
            </div>

            <div className="addDiv">
              <input className="inputRegister" name="middle_name" type="text" placeholder="ingoa waenganui" noValidate onChange={this.handleChange} />
            </div>

            <div className="addDiv">
              <input className="inputRegister" name="last_name" type="text" placeholder="ingoa whakamutunga" noValidate onChange={this.handleChange} />
            </div>

            <div className="addDiv">
              <div className="addAuthDiv">
                <p className="detailsHeading"> Tīpako rohe:</p>
                <select className="registerSelect" onChange={this.handleSelect}>
                  {this.props.area.map(area => {
                    return <option htmlFor="region">{area}</option>;
                  })}
                </select>
              </div>

              <div className="addDiv">
                <p className="detailsHeading">Tīpako iwi:</p>
                <select className="registerSelect" onChange={this.handleSelect2}>
                  {this.state.iwiSelected == null && <option>tīpako iwi</option>}
                  {this.state.regionSelected ? (this.renderIwi()) : <option></option>}
                </select>
              </div>

              <div className="addDiv">
                <p className="detailsHeading">Tīpako hapū:</p>
                <select className="registerSelect" onChange={this.handleSelect3}>
                  {this.state.hapuSelected == null && <option>tīpako hapū</option>}
                  {this.state.iwiSelected ? (
                    this.renderHapu()
                  ) : <option></option>}
                </select>
              </div>

              <div className="addDiv">
                <button className="addrButton" type="button" onClick={this.submitAdd}>Tāpirihia tetahi atu Rohe/Iwi/Hāpu</button>
              </div>
            </div>

            <div className="yourWhakapapa">
              <p className="subHeading">iwi:</p>{this.state.iwi.map(iwi => { return <p>{iwi}, </p> })}
              <p className="subHeading">hapu:</p>{this.state.hapu.map(hapu => { return <p>{hapu}, </p> })}
            </div>

            <div className="addAuthDiv">
              <p className="detailsHeading">Wāhitau:</p>
              <input className="inputRegister" name="address" type="text" placeholder="wāhitau" noValidate onChange={this.handleChange} />
            </div>

            <div className="addDiv">
              <p className="detailsHeading">Email address:</p>
              <input className="inputRegister" name="email" type="text" placeholder="email" noValidate onChange={this.handleChange} />
            </div>

            <div className="addAuthDiv">
              <p className="detailsHeading">Kupuhipa:</p>
              <input className="inputRegister" name="password" type="password" placeholder="kupuhipa" noValidate onChange={this.handleChange} />
            </div>

            <div className="addDiv">
              <input className="inputRegister" name="confirm_password" type="password" placeholder="whakapūmau i te kupuhipa" noValidate onChange={this.handleChange} />
              <p>{this.props.auth.errorMessage}</p>
            </div>

            <div className="addDiv">
              <button className="registerSubmitButton" name="submit">tāuru</button>
            </div>
          </form>
        </div>
      </div>)
  }
}
const mapStateToProps = state => {
  return {
    alliwi: state.iwi,
    area: state.area,
    auth: state.auth
  }
}
export default connect(mapStateToProps)(RegisterReo);