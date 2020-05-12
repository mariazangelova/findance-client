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
    <div className="container">
      {events.map((event) => (
        <Event
          key={event.id}
          title={event.title}
          description={event.description}
          teacher={event.teacher}
          location={event.location}
          imageUrl={event.imageUrl}
        />
      ))}
      <Event
        title={"Dance With Me"}
        description={
          "First you come close. Then put your right hand on my lower back. Your left hand on my shoulder. Look into my eyes. And move. Slowly."
        }
        teacher={"Maria Angelova"}
        location={"Amsterdam"}
        date={"01-01-2021"}
      />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
}
