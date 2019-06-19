import React from 'react'

import { connect } from "react-redux";
import { fetchAllIwi } from "../../actions/iwi";
import { editRahui } from "../../apis/rahui"
import { fetchAllRahui } from '../../actions/rahui'

class EditRahuiFormEng extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            region: [],
            iwi: [],
            hapu: [],
            geoRef: [],
            authoriser: null,
            datePlaced: null,
            dateLifted: null,
            description: null,
            korero: null,
            email: null,
            contact: null,
            iwiSelected: null,
            hapuSelected: null,
            regionSelected: null,
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
        this.resetIwiHapu = this.resetIwiHapu.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps.dispatch(fetchAllIwi())

        let rahuiId = nextProps.rahuiId;

        let rahui = nextProps.allrahui.find(rahui => rahui.id == rahuiId)

        if (rahui) {
            let { geo_ref, region, iwi, hapu, description, date_placed, date_lifted, korero, authoriser, contact } = nextProps.allrahui.find(rahui => rahui.id == rahuiId)


            this.setState({
                id: rahuiId,
                region: region,
                iwi: iwi,
                hapu: hapu,
                authoriser: authoriser,
                description: description,
                korero: korero,
                geoRef: geo_ref,
                datePlaced: date_placed,
                dateLifted: date_lifted,
                contact: contact
            })
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }


    handleSubmit(e) {
        e.preventDefault()

        const editedRahui = {
            id: this.state.id,
            region: this.state.region,
            iwi: this.state.iwi,
            hapu: this.state.hapu,
            authoriser: this.state.authoriser,
            description: this.state.description,
            korero: this.state.korero,
            geoRef: this.props.coordinates,
            datePlaced: this.state.datePlaced,
            dateLifted: this.state.dateLifted,
            contact: this.state.contact
        }

        // should be a dispatching an action
        editRahui(
            editedRahui
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
            hapuSelected: null
        })

    }

    resetIwiHapu(e) {
        e.preventDefault()

        this.setState({
            region: [],
            iwi: [],
            hapu: [],
            regionSelected: null,
            iwiSelected: null,
            hapuSelected: null
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
            <div>
                <form onSubmit={this.handleSubmit} noValidate>
                    {/* <div> */}
                    <div>
                        <h1>Edit Rāhui</h1>
                    </div>

                    <div className="addDiv">
                        <h2 className="step">step one</h2>
                        <p className="stepInfo">Zoom into an area on the map and draw an outline for where you want to place the rāhui.</p>
                    </div>
                    <div className="addDiv2">
                        <h2 className="step">step two</h2>
                        <p className="stepInfo">Edit details for this rāhui:</p>
                    </div>

                    {/* <div className="dropdownboxedit">
                        <p>Select region:</p>

                        <select onChange={this.handleSelect}>
                            {this.props.area.map(area => {
                                return <option htmlFor="region">{area}</option>;
                            })}
                        </select>

                        <br></br>
                        <br></br>

                        {<p>Select iwi:</p>}
                        <select onChange={this.handleSelect2}>
                            {this.state.regionSelected ? (this.renderIwi()) : <option disabled></option>}
                        </select>

                        <br></br>
                        <br></br>

                        {<p>Select hapū:</p>}
                        <select onChange={this.handleSelect3}>
                            {this.state.iwiSelected ? (
                                this.renderHapu()
                            ) : <option disabled></option>}
                        </select>
                    </div> */}
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
                    </div>

                    <div className="addDiv">
                        <button className="addButton" type="button" onClick={this.submitAdd}>Add another associated region/iwi/hāpu</button>
                    </div>

                    <div className="addDiv">
                        <button className="addButton" type="button" onClick={this.resetIwiHapu}>Reset iwi/hapū</button>
                    </div>

                    <div className="yourWhakapapa">
                        <p className="subHeading">Iwi:</p> {this.state.iwi.map(iwi => { return <p>{iwi}, </p> })}
                        <p className="subHeading">Hapū:</p> {this.state.hapu.map(hapu => { return <p>{hapu}</p> })}
                    </div >




                    <div className="addAuthDiv">
                        <p className="detailsHeading">Authorised by:</p>
                        <input placeholder="authoriser's name" name="authoriser" type="text" placeholder={this.state.authoriser} noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <p>Date rahūi placed:</p>
                        <input name="datePlaced" type="date" noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <p>Date rahūi lifted:</p>
                        <input name="dateLifted" type="date" noValidate onChange={this.handleChange} />
                    </div>


                    <div className="addDiv">
                        <p className="detailsHeading">Brief description of the rahūi:</p>
                        <textarea className="descriptionArea" placeholder="description" name="description" type="text" value={this.state.description} rows="10" cols="60" noValidate onChange={this.handleChange} />
                    </div>


                    <div className="addDiv">
                        <p className="detailsHeading">Further details of the rahūi:</p>
                        <textarea className="koreroArea" placeholder="korero" name="korero" type="text" value={this.state.korero} rows="20" cols="60" noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <p className="detailsHeading">Contact details:</p>
                        <input name="contact" type="text" value={this.state.contact} noValidate onChange={this.handleChange} />
                    </div>

                    <div className="addDiv">
                        <button className="addButton" name="submit">Edit Rahūi</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allrahui: state.rahui,
        alliwi: state.iwi,
        area: state.area,
        coordinates: state.coords
    }
}

export default connect(mapStateToProps)(EditRahuiFormEng);