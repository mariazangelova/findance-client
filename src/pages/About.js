import React from "react";
import GoogleMap from "../components/GoogleMap";
import Map from "../components/Map";

class About extends React.Component {
  render() {
    return (
      <div style={{ margin: "100px" }}>
        <Map
          google={this.props.google}
          center={{ lat: 18.5204, lng: 73.8567 }}
          height="300px"
          zoom={15}
        />
      </div>
    );
  }
}

export default About;
