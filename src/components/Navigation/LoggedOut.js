import React from "react";
import { useHistory } from "react-router-dom";

export default function LoggedOut() {
  const history = useHistory();

  return (
    <button
      className="logout-button"
      onClick={() => {
        history.push("/login");
      }}
    >
      LOG IN
    </button>
  );
}
