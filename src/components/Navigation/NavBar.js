import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import "../../style/navbar.css";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { logOut } from "../../store/user/actions";

export default function NavBar() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <ul class="block-menu">
      <li>
        <NavLink to="/" exact className="three-d">
          Events
          <span aria-hidden="true" class="three-d-box">
            <span class="front">Events</span>
            <span class="back">Events</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="three-d">
          ABOUT
          <span aria-hidden="true" class="three-d-box">
            <span class="front">ABOUT</span>
            <span class="back">ABOUT</span>
          </span>
        </NavLink>
      </li>
      {token ? (
        <li>
          <NavLink to="/add-event" class="three-d">
            Add Event
            <span aria-hidden="true" class="three-d-box">
              <span class="front">Add Event</span>
              <span class="back">Add Event</span>
            </span>
          </NavLink>
        </li>
      ) : null}
      {loginLogoutControls}
    </ul>
  );
}
