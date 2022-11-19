import axios from "axios";
import React, { useEffect, useState } from "react";
import { CreateTodo } from "./CreateTodo";

export const Todos = ({ token, user, setUser }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://todo-app-server-tan.vercel.app/todos", {
        // .get("http://localhost:5000/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setTodos(response.data.results);
        setUser(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
    //TODO fix infinite rerender
  }, [token, setUser]);

  return (
    <div className="todo-container">
      <CreateTodo token={token} user={user} todos={todos} setTodos={setTodos} />
      <ul className="list">
        {!todos.length ? (
          <p>Loading...</p>
        ) : (
          todos.map((todo) => {
            return (
              <li className="item" key={todo.id}>
                {todo.todo}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};
