import React, { useState, useEffect } from "react";
import { signUp } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "../style/login.css";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    dispatch(signUp(firstName, lastName, email, phone, password));

    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <div class="body"></div>
      <div class="grad"></div>
      <div class="header">
        <div>
          Fin<span>Dance</span>
        </div>
      </div>
      <form class="login">
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="phone number"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="repeat password"
          name="password"
          required
        />
        <input type="submit" value="Signup" onClick={submitForm} />
      </form>
    </div>
  );
}
