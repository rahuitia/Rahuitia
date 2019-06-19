import React from 'react'
import decode from 'jwt-decode'

import { getUserTokenInfo } from '../../utils/auth'

// import data from '../apis/iwi'
import { connect } from "react-redux";
import { fetchAllIwi } from "../../actions/iwi";
import { writeRahui } from "../../apis/rahui"
import { fetchAllRahui } from '../../actions/rahui'

import { toggleLang } from "../../actions/toggle";
import { decorator } from '@babel/types';

class AddRahuiFormEng extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: [],
            iwi: [],
            hapu: [],
            geoRef: null,
            authoriser: null,
            datePlaced: null,
            dateLifted: "This Rāhui is still active",
            description: null,
            korero: null,
            contact: null,
            iwiSelected: null,
            hapuSelected: null,
            regionSelected: null,
            iwihapuboxIsVisible: false,
            iwihapuButtonText: "Add selected Region/Iwi/Hāpu"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelect2 = this.handleSelect2.bind(this);
        this.handleSelect3 = this.handleSelect3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderHapu = this.renderHapu.bind(this)
        this.renderIwi = this.renderIwi.bind(this)
        this.submitAdd = this.submitAdd.bind(this);

    }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }

    handleSubmit(e) {
        e.preventDefault()

        const rahui = {
            userId: getUserTokenInfo().user_id,
            region: this.state.region,
            iwi: this.state.iwi,
            hapu: this.state.hapu,
            description: this.state.description,
            geoRef: this.props.coordinates,
            korero: this.state.korero,
            datePlaced: this.state.datePlaced,
            dateLifted: this.state.dateLifted,
            contact: this.state.contact,
            authoriser: this.state.authoriser
        }

        // should be a dispatching an action
        writeRahui(
            rahui
        ).then(
            () => {
                this.props.dispatch(fetchAllRahui())
            }
        )

        window.location = `/#/explore`
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
            hapuSelected: null,
            iwihapuboxIsVisible: true,
            iwihapuButtonText: "Add Another Associated Region/Iwi/Hāpu"
        })

    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

    handleSelect(event) {
        this.setState({
            regionSelected: event.target.value
        });
    }

    handleSelect2(event) {
        this.setState({
            iwiSelected: event.target.value
        });
    }

    handleSelect3(event) {
        this.setState({
            hapuSelected: event.target.value
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
            <div
            // className="addFormContainer"
            >
                <form onSubmit={this.handleSubmit} noValidate>
                    <div>
                        <h2>Add a Rāhui</h2>
                    </div>

                    <div className="addDiv">
                        <h2 className="step">step one</h2>
                        <p className="stepInfo">Zoom into an area on the map and draw an outline for where you want to place the rāhui.</p>
                    </div>

                    <div className="addDiv2">
                        <h2 className="step">step two</h2>
                        <p className="stepInfo">Tell us more about the rāhui below.</p>
                    </div>

                    <div className="addDiv">
                        <p className="iwiHapu">Iwi and/or Hapū placing the rāhui:</p>

                        <div className="addDiv">
                            <p className="detailsHeading">Select region:</p>
                            <select onChange={this.handleSelect}>
                                {this.state.regionSelected == null && <option>Choose region</option>}
                                {this.props.area.map(area => {
                                    return <option htmlFor="region">{area}</option>;
                                })}
                            </select>
                        </div>

                        <div className="addDiv">
                            <p className="detailsHeading">Select iwi:</p>
                            <select onChange={this.handleSelect2}>
                                {this.state.iwiSelected == null && <option>Choose iwi</option>}
                                {this.state.regionSelected ? (this.renderIwi()) : <option></option>}
                            </select>
                        </div>

                        <div className="addDiv">
                            <p className="detailsHeading">Select hapū:</p>
                            <select onChange={this.handleSelect3}>
                                {this.state.hapuSelected == null && <option>Choose hapū</option>}
                                {this.state.iwiSelected ? (
                                    this.renderHapu()
                                ) : <option></option>}
                            </select>
                        </div>

                        <div className="addDiv">
                            <button type="button" className="addButton" onClick={this.submitAdd}>{this.state.iwihapuButtonText}</button>
                        </div>
                    </div>

                    <div className='yourWhakapapa'>
                        <p className="subHeading">Iwi:</p>{this.state.iwi.map(iwi => { return <p>{iwi}</p> })}

                        <p className="subHeading">Hapū:</p> {this.state.hapu.map(hapu => { return <p>{hapu}</p> })}
                    </div>


                    <div className="addAuthDiv">
                        <p className="detailsHeading">Authorised by:</p>
                        <input name="authoriser" type="text" placeholder="authoriser's name" noValidate onChange={this.handleChange} />
                    </div>


                    <div className="addDiv">
                        <p className="detailsHeading">Date rahūi placed:</p>
                        <input name="datePlaced" type="date" noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <p className="detailsHeading">Date rahūi lifted:</p>
                        <input name="dateLifted" type="date" noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <p className="detailsHeading">Brief description of the rahūi:</p>
                        <textarea className="descriptionArea" name="description" type="text" placeholder="description"
                            // rows="5" cols="60"
                            noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <p className="detailsHeading">Further details of the rahūi:</p>
                        <textarea className="koreroArea" name="korero" type="text" placeholder="korero"
                            // rows="10" cols="60"
                            noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <p className="detailsHeading">Contact details:</p>
                        <input name="contact" type="text" placeholder="Contact email or number" noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <button className="addButton" name="submit">Add Rāhui</button>
                    </div>
                </form>
                <div className="spaceme" />
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        alliwi: state.iwi,
        area: state.area,
        coordinates: state.coords,
        lang: state.toggle
    }
}
export default connect(mapStateToProps)(AddRahuiFormEng);