import axios from "axios";
import React, { useState } from "react";

export const CreateTodo = ({ token, user, todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  console.log(user);
  console.log(token);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();

        axios.post(
          "https://todo-app-server-tan.vercel.app/todos",
          {
            todo,
            user_id: user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTodo("");
        setTodos([...todos, { todo, user_id: user.id }]);

        // navigate("/todos");
      }}
    >
      <input
        className="input"
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        placeholder="What do you need to do..."
      />

      <input className="submit" type="submit" value="Add a todo!" />
    </form>
  );
};
