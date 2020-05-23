import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEvent, postDancer, fetchDancers } from "../store/event/actions";
import { selectEvent, selectDancers } from "../store/event/selectors";
import { selectToken } from "../store/user/selectors";
import GoogleMap from "../components/GoogleMap";
import "../style/eventdetails.css";

export default function EventDetails() {
  const [loginMessage, setLoginMessage] = useState("");
  const [joinedMessage, setJoinedMessage] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector(selectEvent);
  const dancers = useSelector(selectDancers);
  console.log("dancers", dancers);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchEvent(id));
    dispatch(fetchDancers(id));
  }, [dispatch, id]);

  const handleClick = () => {
    if (!token) {
      setLoginMessage("Please login or signup to join this class.");
    }
    setJoinedMessage("You've signed up for this class.");
    dispatch(postDancer(id));
  };

  return (
    <div className="container">
      <div
        className="col-md-6"
        style={{ backgroundColor: "#bbb", color: "black" }}
      >
        <img alt={event.title} src={event.imageUrl} />
        <p>
          Attending:
          {dancers
            ? dancers.map((dancer) => <span> {dancer.user.firstName},</span>)
            : null}
        </p>
      </div>
      <div
        className="col-md-4"
        style={{ backgroundColor: "#bbb", color: "black" }}
      >
        <div className="details">
          <h1 style={{ marginLeft: "10px" }}>{event.title}</h1>
          <p style={{ marginBottom: "10px" }}>
            {event.styles
              ? Array.prototype.map.call(event.styles, function (style) {
                  return <span className="styles">{style.name}</span>;
                })
              : null}
          </p>
          <p>{event.description}</p>
          <p>Teacher: {event.teacher}</p>
          <p>When: {event.datetime}</p>
          <p>Location: {event.location}</p>
          {event.price == 0 ? (
            <p>This class is free.</p>
          ) : (
            <p>Price: {event.price}</p>
          )}
        </div>
        <button style={{ width: "40%" }} onClick={handleClick}>
          JOIN THIS CLASS
        </button>
        <p>
          {loginMessage}
          {joinedMessage}
        </p>

        <GoogleMap
          lng={parseFloat(event.longitude)}
          lat={parseFloat(event.latitude)}
        />
        <p>{event.address}</p>
      </div>
    </div>
  );
}
