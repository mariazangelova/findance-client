import React from "react";
import GoogleMap from "../components/GoogleMap";
import Map from "../components/Map";

class About extends React.Component {
  render() {
    return (
      <div style={{ margin: "100px" }}>
        <Map
          google={this.props.google}
          center={{ lat: 52.3667, lng: 4.8945 }}
          height="300px"
          zoom={15}
        />
      </div>
    );
  }
}

export default About;
