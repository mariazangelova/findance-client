import React from "react";
import AddEventForm from "../components/AddEventForm";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";

export default function AddEvent() {
  const token = useSelector(selectToken);
  if (!token) {
    return (
      <div>
        <h1>Log in or sign up to add events.</h1>
      </div>
    );
  }
  return (
    <div>
      <AddEventForm />
    </div>
  );
}
