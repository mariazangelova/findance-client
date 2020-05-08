import React from "react";
import "../style/flipbox.css";

export default function FlipBox() {
  return (
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <h2>title</h2>
          <p>date</p>
          <p>location</p>
        </div>
        <div class="flip-box-back">
          <p>description</p>
          <p>teacher</p>
          <button>more and signup</button>
        </div>
      </div>
    </div>
  );
}
