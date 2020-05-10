import React from "react";
import "../style/flipbox.css";

export default function Event(props) {
  return (
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <img
            src="https://www.ndt.nl/content/uploads/2020/02/BELLA-FIGURA-2020-%C2%A9-Joris-Jan-Bos-online-4_2022_1626_.jpg?t=38fe3b05cbb4bbc1bb28295c9d499c14"
            style={{ width: "300px" }}
          />
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
