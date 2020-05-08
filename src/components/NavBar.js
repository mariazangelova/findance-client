import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

export default function NavBar() {
  return (
    <ul class="block-menu">
      <li>
        <NavLink to="/" exact className="three-d">
          HOME
          <span aria-hidden="true" class="three-d-box">
            <span class="front">HOME</span>
            <span class="back">HOME</span>
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
        <NavLink to="/something" class="three-d">
          Home
          <span aria-hidden="true" class="three-d-box">
            <span class="front">Home</span>
            <span class="back">Home</span>
          </span>
        </NavLink>
      </li>
    </ul>
  );
}
