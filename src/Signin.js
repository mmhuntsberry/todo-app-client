import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(
              "https://todo-app-server-tan.vercel.app/signin",
              {
                email,
                password,
              },
              {}
            )
            .then(function (response) {
              props.setToken(response.data.token);
            })
            .catch(function (error) {
              console.log(error);
            });

          setEmail("");
          setPassword("");
          navigate("/todos");
        }}
      >
        <label className="label">
          Email:
          <input
            className="input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="label">
          Password:
          <input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <input className="submit" type="submit" value="Sign In!" />
        <p>
          New here? <Link to="/signup">Signup!</Link>
        </p>
      </form>
    </>
  );
};
