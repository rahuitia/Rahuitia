import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getUserTokenInfo } from '../../utils/auth'
import NewMap from '../NewMap'
import TautokoReo from "../Tautoko/TautokoReo"
import { fetchAllRahui } from "../../actions/rahui";



class DetailReo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: null,
    }
    this.handleClick = this.handleClick.bind(this)
    this.userId = this.userId.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchAllRahui())
    this.setState({
      visibility: "list"
    })
  }

  handleClick(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      visibility: value
    });
  }

  handleClickExplore = () => {
    window.location = `/#/explore`;
  }

  userId = () => {
    console.log("One:", getUserTokenInfo() !== null ? getUserTokenInfo().user_id : 0)
    return getUserTokenInfo() !== null ? getUserTokenInfo().user_id : 0
  }

  renderMap = (theOne) => {
    console.log("the one: ", theOne)
    let { id, geo_ref, iwi_name, user_id, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, region, authoriser, contact, iwi, hapu } = theOne

    return (
      <React.Fragment>
        <div className="mapBackground" style={this.state.visibility == "map" ? { zIndex: 81 } : { zIndex: 71 }}>
          <button className="backToList" onClick={this.handleClickExplore.bind(this)}> hoki ki te Rārangi </button>
          <NewMap color={"#2E86C1"} rahuiBounds={geo_ref} />
        </div>
        <div className="overlayNew" style={this.state.visibility == "list" ? { zIndex: 81 } : { zIndex: 71 }}>

          <div className="detailsEditDiv">
            {this.userId() == user_id && <div className="edit-button"><Link to={`/rahui/${id}/edit`}>whakatika</Link></div>}
          </div>

          <div className="rahui-text">
            <h1 className="descriptionDetail">{description}</h1>
            <div className="detailsWrapper">

              <div className="detailsDiv">
                <p className="detailsHeading">I Whakaputaina e:</p>
                <p>iwi: {iwi}</p>
                <p>hapu: {hapu}</p>
              </div>

              <div className="detailsDiv">
                <p className="detailsHeading">Te Ingoa o nga Kaituhi:</p>
                <p> {authoriser}</p>
              </div>

              <div className="detailsDiv">
                <p className="detailsHeading">Rā Kua Tuhia:</p>
                <p> {date_placed}</p>
              </div>


              <div className="detailsDiv">
                <p className="detailsHeading">Rā Kua Piki:</p>
                <p> {date_lifted}</p>
              </div>

              <div className="detailsDiv">
                <p className="detailsHeading">Tukuna e:</p>
                <p> {first_name} {last_name}</p>
              </div>

              <div className="detailsDiv">
                <p className="detailsHeading">Whakapa Mai:</p>
                <p> {contact}</p>
              </div>
            </div>

            <div className="koreroWrapper">
              <div>
                <p className="detailsHeading">Korero:</p>
                <p> {korero}</p>
              </div>
            </div>


          </div>

        </div>
        <div className="explore-buttons">
          <div className="explore-toggle-button">
            <button className={this.state.visibility == "list" ? "button-selected" : "button-deselected"} value="list" onClick={this.handleClick}>Detail</button>
          </div>

          <div className="explore-toggle-button">
            <button className={this.state.visibility == "map" ? "button-selected" : "button-deselected"} value="map" onClick={this.handleClick}>Map</button>
          </div>

        </div>
      </React.Fragment >
    )
  }

  renderError = () => {
    return <div className="error-message"><p>kāore he rāhui i te tīariari</p></div>
  }

  renderDetail = () => {
    let theOne = this.props.rahui.find(rahui => rahui.id == this.props.rahuiId)

    return theOne != undefined ? this.renderMap(theOne) : this.renderError()
  }

  render() {
    console.log(this.props)
    return this.props.rahui.length && this.renderDetail()

    // return this.props.rahui.length ? this.renderDetail() : this.renderLoading()

  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle,
    rahui: state.rahui
  }
}

export default connect(mapStateToProps)(DetailReo);
