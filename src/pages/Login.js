import React, { useState, useEffect } from "react";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
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

  function onSubmit(event) {
    //event.preventDefault();

    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }
  return (
    <div className="login">
      <form
        className="event-form"
        style={{ maxWidth: "300px", marginTop: "180px" }}
      >
        <input
          ref={register({ required: true })}
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <span>This field is required</span>}

        <input
          ref={register({ required: true })}
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errors.password && <span>This field is required</span>}
        <input type="submit" value="LOGIN" onClick={handleSubmit(onSubmit)} />
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
