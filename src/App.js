import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { Signup } from "./Signup";
import { Signin } from "./Signin";

function App() {
  const [todos, setTodos] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log({ token });
    axios
      .get("https://todo-app-server-tan.vercel.app/todos", {
        headers: {
          Authorization: `Bearer ${token.data}`,
        },
      })
      .then(function (response) {
        console.log(response);
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [token]);

  return (
    <>
      <Signup />
      <Signin setToken={setToken} />
      <ul className="App">
        {!todos.length ? (
          <p>Loading...</p>
        ) : (
          todos.map((todo) => {
            return <li key={todo.id}>{todo.todo}</li>;
          })
        )}
      </ul>
    </>
  );
}

export default App;
