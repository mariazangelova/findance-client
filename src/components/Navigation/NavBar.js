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
    <ul className="block-menu">
      <li className="logo">
        FIN<span style={{ color: "#a52a2a" }}>DANCE</span>
      </li>
      <li>
        <NavLink to="/" exact className="three-d">
          Events
          <span aria-hidden="true" className="three-d-box">
            <span className="front">Events</span>
            <span className="back">Events</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="three-d">
          ABOUT
          <span aria-hidden="true" className="three-d-box">
            <span className="front">ABOUT</span>
            <span className="back">ABOUT</span>
          </span>
        </NavLink>
      </li>
      {token ? (
        <li>
          <NavLink to="/add-event" className="three-d">
            Add Event
            <span aria-hidden="true" className="three-d-box">
              <span className="front">Add Event</span>
              <span className="back">Add Event</span>
            </span>
          </NavLink>
        </li>
      ) : null}
      {token ? (
        <li>
          <NavLink to="/myprofile" className="three-d">
            MY PROFILE
            <span aria-hidden="true" className="three-d-box">
              <span className="front">MY PROFILE</span>
              <span className="back">MY PROFILE</span>
            </span>
          </NavLink>
        </li>
      ) : null}

      {loginLogoutControls}
    </ul>
  );
}
