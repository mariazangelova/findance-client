import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import "../style/profile.css";
import Loading from "./Loading";

export default function Profile() {
  const user = useSelector(selectUser);
  if (!user) {
    return <Loading type={"bars"} color={"black"} />;
  }

  return (
    <div className="profile">
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <img
          style={{ width: "200px", borderRadius: "50%" }}
          src="https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg"
          alt="Card image cap"
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p className="profile-data">First name: {user.firstName}</p>
        <p className="profile-data">Second name: {user.secondName}</p>
        <p className="profile-data"> Email: {user.email}</p>
        <p className="profile-data">Phone: {user.phone}</p>
      </div>
    </div>
  );
}
