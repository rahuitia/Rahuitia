import React, { Component } from 'react'

import { connect } from "react-redux";
import { withScriptjs, withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps'
import { relative } from 'path';

const styles = require('../../googleMapStyle.json')


class NewMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rahuiBounds: [{ lat: -36.543484, lng: 172.880926 }, { lat: -43.622458, lng: 170.036187 }]
    }
  }

  componentDidMount = () => {
    this.setState({
      rahuiBounds: this.props.rahuiBounds
    })
  }

  render() {

    const rahuiCoords = this.props.allrahui.length > 0 ? this.state.rahuiBounds : []
    let requiredMapBounds
    // let requiredCenter
    if (rahuiCoords.length > 0) {
      requiredMapBounds = new window.google.maps.LatLngBounds();

      rahuiCoords.forEach(rahuiPoint => {
        requiredMapBounds.extend(new window.google.maps.LatLng(rahuiPoint.lat, rahuiPoint.lng))
      })

      // requiredCenter = requiredMapBounds.getCenter()
    }


    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        //  defaultCenter = { this.props.coords }
        defaultZoom={this.props.zoom}
        defaultOptions={{
          disableDefaultUI: true,
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: true,
          mapTypeControlOptions: {      
            mapTypeIds: [
              google.maps.MapTypeId.ROADMAP,
              google.maps.MapTypeId.SATELLITE
            ]},
          panControl: true,
          zoomControl: true,
          rotateControl: false,
          fullscreenControl: false,
          labels: false,
          styles: styles,
        }}


        ref={map => {

          if (map && rahuiCoords && rahuiCoords.length > 0) {
            map.fitBounds(requiredMapBounds)
          }
          return map
        }}
      >

        {this.props && this.props.allrahui && this.props.allrahui.map(rahuicoords => {
          return (<div>
            <Marker key={rahuicoords.id + 100} position={rahuicoords.geo_ref[0]} onClick={() => {
              let newBounds = rahuicoords.geo_ref
              this.setState({
                rahuiBounds: newBounds
              })
              window.location = `#/rahui/${rahuicoords.id}`
            }} />

            <Polygon
              path={rahuicoords.geo_ref}
              key={rahuicoords.id}
              onClick={() => {
                let newBounds = rahuicoords.geo_ref
                this.setState({
                  rahuiBounds: newBounds
                })
                window.location = `#/rahui/${rahuicoords.id}`
              }}

              options={{
                fillColor: "#DC5757",
                fillOpacity: 0.7,
                strokeColor: "#DC5757",
                strokeOpacity: 1,
                strokeWeight: 1
              }} />
          </div>)
        })}

      </GoogleMap>
    ));


    return (
      <div>
        <GoogleMapExample
          containerElement={<div className="map-container" />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}           
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    allrahui: state.rahui
  }
}

export default connect(mapStateToProps)(NewMap);