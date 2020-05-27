import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Event from "../components/Event";
import { fetchEvents } from "../store/events/actions";
import { selectEvents } from "../store/events/selectors";
import { fetchStyles } from "../store/styles/actions";
import Loading from "../components/Loading";

export default function HomePage() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchStyles());
  }, [dispatch]);

  if (events.length === 0) {
    return <Loading type={"bars"} color={"black"} />;
  }
  console.log("events", events);
  return (
    <div className="container-events">
      {events.map((event) => (
        <Event
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          teacher={event.teacher}
          location={event.location}
          imageUrl={event.imageUrl}
          datetime={event.datetime}
          styles={event.styles}
          price={event.price}
        />
      ))}
    </div>
  );
}
