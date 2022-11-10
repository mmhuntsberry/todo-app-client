import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .post("https://todo-app-server-tan.vercel.app/signup", {
            name,
            email,
            password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        setName("");
        setEmail("");
        setPassword("");
        navigate("/signin");
      }}
    >
      <label className="label">
        Name:
        <input
          className="input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
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
      <input className="submit" type="submit" value="Signup!" />
    </form>
  );
};
