import React from "react";

export default function AddEventForm() {
  return (
    <div className="event-form">
      <form action="/action_page.php">
        <input type="text" id="fname" name="firstname" placeholder="TITLE" />
        <textarea name="description" placeholder="DESCRITPION"></textarea>
        <input type="text" id="teacher" name="teacher" placeholder="TEACHER" />
        <input type="text" id="dj" name="dj" placeholder="DJ" />
        <input type="text" id="lname" name="lastname" placeholder="LOCATION" />
        <input
          type="number"
          min="0"
          id="lname"
          name="duration"
          step="any"
          placeholder="DURATION"
        />{" "}
        hours
        <input
          type="number"
          min="0.00"
          id="price"
          name="durapricetion"
          step="0.50"
          placeholder="PRICE"
        />{" "}
        euros
        <label>CITY</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
