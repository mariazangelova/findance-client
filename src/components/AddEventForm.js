import React from "react";
import UploadImage from "./UploadImage";
//import GoogleMap from "../components/GoogleMap";
import Map from "./Map";

export default class AddEventForm extends React.Component {
  render() {
    return (
      <div className="event-form">
        <form action="/action_page.php">
          <div className="form-left">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="TITLE"
            />
            <textarea name="description" placeholder="DESCRITPION"></textarea>
            <input
              type="text"
              id="teacher"
              name="teacher"
              placeholder="TEACHER"
              style={{ width: "48%", marginRight: "10px" }}
            />
            <input
              type="text"
              id="dj"
              name="dj"
              placeholder="DJ"
              style={{ width: "48%" }}
            />

            <input
              type="number"
              min="0"
              id="lname"
              name="duration"
              step="any"
              placeholder="DURATION"
              style={{ marginRight: "10px" }}
            />
            <input
              type="number"
              min="0.00"
              id="price"
              name="price"
              step="0.50"
              placeholder="PRICE"
            />
            <input
              type="number"
              min="1"
              id="maxDancers"
              name="macDancers"
              placeholder="HOW MANY PARTICIPANTS"
              style={{ width: "100%" }}
            />
            <UploadImage />
          </div>
          <div className="form-right">
            <input type="submit" value="SUBMIT" />

            <div style={{}}>
              {/* <Map
                google={this.props.google}
                center={{ lat: 52.3667, lng: 4.8945 }}
                height="300px"
                width="100%"
                zoom={15}
              /> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
