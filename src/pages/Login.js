import React, { useState, useEffect } from "react";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

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
    <div className="login">
      <form
        className="event-form"
        style={{ maxWidth: "300px", marginTop: "150px" }}
      >
        <input
          required
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <input type="submit" value="LOGIN" onClick={submitForm} />
        <p style={{ marginTop: "20px" }}>
          Not a member?{" "}
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#a52a2a" }}
          >
            {" "}
            Click here to signup.{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}
