import React, { useState, useEffect } from "react";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "../style/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <div className="body"></div>
      <div className="grad"></div>
      <div className="header">
        <div>
          Fin<span>Dance</span>
        </div>
      </div>
      <form className="login">
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <input type="submit" value="Signup" onClick={submitForm} />
      </form>
    </div>
  );
}
