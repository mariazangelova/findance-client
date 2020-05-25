import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logOut } from "../../store/user/actions";
//import { selectUser } from "../../store/user/selectors";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  //const user = useSelector(selectUser);
  const handleClick = () => {
    history.push("/");

    dispatch(logOut());
  };
  return (
    <button className="logout-button" onClick={handleClick}>
      LOGOUT
    </button>
  );
}
