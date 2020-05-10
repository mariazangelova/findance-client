import React from "react";
import UploadImage from "./UploadImage";

export default function AddEventForm() {
  return (
    <div className="event-form">
      <form action="/action_page.php">
        <div className="form-left">
          <input type="text" id="fname" name="firstname" placeholder="TITLE" />
          <textarea name="description" placeholder="DESCRITPION"></textarea>
          <input
            type="text"
            id="teacher"
            name="teacher"
            placeholder="TEACHER"
            style={{ width: "48%", marginRight: "10px" }}
          />
          <input
            type="text"
            id="dj"
            name="dj"
            placeholder="DJ"
            style={{ width: "48%" }}
          />

          <input
            type="number"
            min="0"
            id="lname"
            name="duration"
            step="any"
            placeholder="DURATION"
            style={{ marginRight: "10px" }}
          />
          <input
            type="number"
            min="0.00"
            id="price"
            name="price"
            step="0.50"
            placeholder="PRICE"
          />
          <input
            type="number"
            min="1"
            id="maxDancers"
            name="macDancers"
            placeholder="HOW MANY PARTICIPANTS"
            style={{ width: "100%" }}
          />
          <UploadImage />
        </div>
        <div className="form-right">
          <textarea name="description" placeholder="DESCRITPION"></textarea>

          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
}
