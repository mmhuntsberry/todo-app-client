import { useEffect, useState } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import { CreateTodo } from "./CreateTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  // TODO NEED TO PASS USER TO GET USER ID TO CREATE TODO
  // CURENTLY THROWONG AN ERROR

  const router = createBrowserRouter([
    {
      path: "/todos",
      element: (
        <div className="todo-container">
          <CreateTodo
            token={token}
            user={user}
            todos={todos}
            setTodos={setTodos}
          />
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
      ),
    },
    {
      path: "/",
      element: <Signin setToken={setToken} />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

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
  }, [token]);

  return (
    <RouterProvider router={router}>
      <Signup />
      <Signin setToken={setToken} />
    </RouterProvider>
  );
}

export default App;
