import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEvent } from "../store/event/actions";
import { selectEvent } from "../store/event/selectors";
import { selectToken } from "../store/user/selectors";
import GoogleMap from "../components/GoogleMap";

export default function EventDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector(selectEvent);
  console.log("EVENT", event);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchEvent(id));
  }, [dispatch, id]);

  const handleClick = () => {
    if (!token) {
      return <p>Register to join events.</p>;
    }
  };

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <img alt={event.title} src={event.imageUrl} />
      <p>{event.description}</p>
      <p>{event.teacher}</p>
      <div>
        <GoogleMap
          lng={parseFloat(event.longitude)}
          lat={parseFloat(event.latitude)}
        />
      </div>
      <div>
        <button style={{ width: "40%" }} onClick={handleClick}>
          JOIN THIS CLASS
        </button>
      </div>
    </div>
  );
}
