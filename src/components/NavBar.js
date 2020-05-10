import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

export default function NavBar() {
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
      <li>
        <NavLink to="/add-event" class="three-d">
          Add Event
          <span aria-hidden="true" class="three-d-box">
            <span class="front">Add Event</span>
            <span class="back">Add Event</span>
          </span>
        </NavLink>
      </li>
    </ul>
  );
}
