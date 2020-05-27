import React, { useState, useEffect } from "react";
import { signUp } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();

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
    //event.preventDefault();
    dispatch(signUp(firstName, lastName, email, phone, password));

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
          ref={register({ required: true })}
          type="text"
          placeholder="first name"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        {errors.firstName && <span>Please type your first name.</span>}
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
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && errors.email.message}
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
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input
          type="password"
          placeholder="repeat password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input
          type="submit"
          value="SIGN UP"
          onClick={handleSubmit(submitForm)}
        />
      </form>
    </div>
  );
}
