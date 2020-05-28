import React from "react";
import { connect } from "react-redux";
import UploadImage from "./UploadImage";
import Map from "./Map";
import { postEvent } from "../store/events/actions";
import { fetchStyles } from "../store/styles/actions";
import { Redirect } from "react-router-dom";

//import { Image } from "cloudinary-react";

class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      teacher: "",
      dj: "",
      duration: null,
      price: null,
      maxDancers: null,
      imageUrl: "",
      location: "",
      address: "",
      longitude: "",
      latitude: "",
      styles: [],
      datetime: new Date(),
      submitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    console.log("STATE", this.state);
    event.preventDefault();
    this.props.postEvent(this.state);
    this.setState({
      title: "",
      description: "",
      location: "",
      teacher: "",
      dj: "",
      duration: null,
      price: null,
      maxDancers: null,
      submitted: true,
    });
  }
  handleChange(event) {
    if (this.state.styles.includes(event.target.value)) {
      const filtered = this.state.styles.filter(
        (style) => style !== event.target.value
      );
      this.setState({ styles: filtered });
    } else {
      this.setState({ styles: [...this.state.styles, event.target.value] });
    }
  }
  getImage = (image) => {
    this.setState({ imageUrl: image });
  };
  getAddress = (address, mapPosition) => {
    this.setState({
      address: address,
      longitude: mapPosition.lng,
      latitude: mapPosition.lat,
    });
  };
  componentDidMount() {
    this.props.fetchStyles();
  }
  render() {
    const { styles } = this.props;
    if (this.state.submitted === true) {
      return (
        <div
          className="container-event"
          style={{ marginTop: "100px", padding: "50px" }}
        >
          <h1>The event has been added. Thank you.</h1>
        </div>
      );
    }
    return (
      <div className="event-form">
        <form action="/" onSubmit={this.handleSubmit}>
          <div className="form-left">
            <input
              type="text"
              placeholder="TITLE"
              value={this.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <textarea
              name="description"
              placeholder="DESCRITPION"
              value={this.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            ></textarea>
            <input
              type="text"
              id="teacher"
              name="teacher"
              placeholder="TEACHER"
              style={{ width: "48%", marginRight: "10px" }}
              value={this.teacher}
              onChange={(e) => this.setState({ teacher: e.target.value })}
            />
            <input
              type="text"
              id="dj"
              name="dj"
              placeholder="DJ"
              style={{ width: "48%" }}
              value={this.dj}
              onChange={(e) => this.setState({ dj: e.target.value })}
            />
            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              value={this.datetime}
              min={"2020-05-05T00:00"}
              onChange={(e) => this.setState({ datetime: e.target.value })}
              max="2030-06-14T00:00"
              style={{ marginRight: "10px", width: "48%" }}
            ></input>
            <input
              type="number"
              min="0"
              id="lname"
              name="duration"
              step="any"
              placeholder="DURATION"
              style={{ width: "48%" }}
              value={this.duration}
              onChange={(e) => this.setState({ duration: e.target.value })}
            />
            <input
              type="number"
              min="0.00"
              id="price"
              name="price"
              step="0.50"
              placeholder="PRICE"
              value={this.price}
              style={{ marginRight: "10px", width: "48%" }}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
            <input
              type="number"
              min="1"
              id="maxDancers"
              name="macDancers"
              placeholder="MAX DANCERS"
              value={this.maxDancers}
              onChange={(e) => this.setState({ maxDancers: e.target.value })}
              style={{ width: "48%" }}
            />
            <div>
              {styles.map((style) => (
                <label key={style.id} className="style-checkbox">
                  {style.name}
                  <input
                    type="checkbox"
                    value={style.id}
                    onChange={this.handleChange}
                  />
                </label>
              ))}
            </div>
            <UploadImage postImage={this.getImage} />
          </div>
          <div className="form-right">
            <input type="submit" value="SUBMIT" />
            <input
              type="text"
              placeholder="LOCATION NAME"
              value={this.location}
              onChange={(e) => this.setState({ location: e.target.value })}
            />
            <div>
              <Map
                google={this.props.google}
                center={{ lat: 52.3667, lng: 4.8945 }}
                height="300px"
                width="100%"
                zoom={15}
                postAddress={this.getAddress}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ styles: state.styles });

const mapDispatchToProps = {
  postEvent,
  fetchStyles,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventForm);
