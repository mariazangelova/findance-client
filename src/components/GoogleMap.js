import React, { Component } from "react";
//import { connect } from "react-redux";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        <Marker
          position={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
})(MapContainer);

const mapStyles = {
  width: "20%",
  height: "20%",
  top: "160px",
  left: "230px",
};
