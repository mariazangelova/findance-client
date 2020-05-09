import React from "react";
import "../style/flipbox.css";

export default function Event(props) {
  return (
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <h2>{props.title}</h2>
          <p>date</p>
          <p>{props.location}</p>
        </div>
        <div class="flip-box-back">
          <p>{props.description}</p>
          <p>{props.teacher}</p>
          <button>more and signup</button>
        </div>
      </div>
    </div>
  );
}
