import React from "react";
import { Link } from "react-router-dom";
import "../style/flipbox.css";

export default function Event(props) {
  return (
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <img src={props.imageUrl} alt="image" style={{ width: "300px" }} />
          <h2>{props.title}</h2>
          <p>{props.datetime}</p>
          <p>{props.location}</p>
          {props.styles
            ? Array.prototype.map
                .call(props.styles, function (style) {
                  return style.name;
                })
                .join(", ")
            : null}
        </div>
        <div class="flip-box-back">
          <p>{props.description}</p>
          <p>Teacher: {props.teacher}</p>
          <div className="price">
            {props.price == 0 ? (
              <p>This class is free.</p>
            ) : (
              <p>Price: {props.price}</p>
            )}
          </div>
          <div className="button">
            <Link to={`/events/${props.id}`}>
              <button className="button-red">FIND MORE AND SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
