import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchEvent,
  postDancer,
  fetchDancers,
  dancerLeft,
} from "../store/event/actions";
import { selectEvent, selectDancers } from "../store/event/selectors";
import { selectToken, selectUserId } from "../store/user/selectors";
import GoogleMap from "../components/GoogleMap";
import "../style/eventdetails.css";
import Loading from "../components/Loading";
import moment from "moment";

export default function EventDetails() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector(selectEvent);
  const dancers = useSelector(selectDancers);
  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchEvent(id));
    dispatch(fetchDancers(id));
  }, [dispatch, id]);

  const joinClass = () => {
    if (!token) {
      setMessage("Please login or signup to join this class.");
      return;
    }
    setMessage("You joined this class.");
    dispatch(postDancer(id));
  };
  const leaveClass = () => {
    dispatch(dancerLeft(id));
    setMessage("You left this class.");
  };
  //console.log("dancers", dancers);
  //console.log("event", event);
  if (Object.entries(event).length === 0) {
    return <Loading type={"bars"} color={"black"} />;
  }
  return (
    <div className="container-event">
      <div className="collumn-left">
        {event.imageUrl !== "" ? (
          <img alt={event.title} src={event.imageUrl} className="event-image" />
        ) : null}
        <p>
          Attending:{" "}
          {dancers.length > 0
            ? dancers.map((dancer) => dancer.user.firstName).join(", ")
            : null}
        </p>
      </div>
      <div className="collumn-right">
        <div style={{ minHeight: "380px" }}>
          <h1 style={{ marginLeft: "10px" }}>{event.title}</h1>
          <p style={{ marginBottom: "10px" }}>
            {event.styles
              ? Array.prototype.map.call(event.styles, function (style) {
                  return <span className="styles">{style.name}</span>;
                })
              : null}
          </p>
          {event.longitude !== "" && event.latitude !== "" ? (
            <GoogleMap
              lng={parseFloat(event.longitude)}
              lat={parseFloat(event.latitude)}
            />
          ) : null}

          <p style={{}}>{event.description}</p>
          {event.teahcer ? <p>Teacher: {event.teacher}</p> : null}
          {event.dj ? <p>DJ: {event.dj}</p> : null}
          <p>
            When: {moment(event.datetime).format("dddd, MMMM Do YYYY, h:mm a")}
          </p>

          <p>Location: {event.location}</p>
          {event.price === "0" ? (
            <p>This class is free.</p>
          ) : (
            <p>Price: {event.price}</p>
          )}
        </div>

        <div style={{ marginTop: "50px", position: "relative" }}>
          <p style={{ float: "right" }}>{event.address}</p>

          {dancers.some((dancer) => dancer.userId === userId) ? (
            <button style={{ width: "40%" }} onClick={leaveClass}>
              LEAVE THIS CLASS
            </button>
          ) : (
            <button style={{ width: "40%" }} onClick={joinClass}>
              JOIN THIS CLASS
            </button>
          )}
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
