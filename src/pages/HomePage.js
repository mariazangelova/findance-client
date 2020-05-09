import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Event from "../components/Event";
import { fetchEvents } from "../store/events/actions";
import { selectEvents } from "../store/events/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  console.log(events);
  return (
    <div>
      {events.map((event) => (
        <Event
          key={event.id}
          title={event.title}
          description={event.description}
          teacher={event.teacher}
          location={event.location}
        />
      ))}
    </div>
  );
}
