import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Event from "../components/Event";
import { fetchUserEvents } from "../store/user/actions";
import { selectUserEvents } from "../store/user/selectors";
import Profile from "../components/Profile";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const events = useSelector(selectUserEvents);
  console.log("EVENTS USER", events);

  useEffect(() => {
    dispatch(fetchUserEvents());
  }, [dispatch]);
  return (
    <div>
      <div style={{ width: "400px" }}>
        <Profile />
      </div>
      <div
        className="container-events"
        style={{ marginLeft: "500px", gridTemplateColumns: "auto auto" }}
      >
        {events.map((attending) => (
          <Event
            key={attending.event.id}
            id={attending.event.id}
            title={attending.event.title}
            description={attending.event.description}
            teacher={attending.event.teacher}
            location={attending.event.location}
            imageUrl={attending.event.imageUrl}
            datetime={attending.event.datetime}
            styles={attending.event.styles}
            price={attending.event.price}
          />
        ))}
      </div>
    </div>
  );
}
