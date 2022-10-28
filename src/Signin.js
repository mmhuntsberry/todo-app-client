import axios from "axios";
import React, { useState } from "react";

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
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
            console.log(response);
            props.setToken(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        setEmail("");
        setPassword("");
      }}
    >
      <label>
        Email:
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <input type="submit" value="Sign In!" />
    </form>
  );
};
