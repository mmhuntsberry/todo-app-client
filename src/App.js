import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import "./App.css";
import { Todos } from "./Todos";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin setToken={setToken} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/todos"
          element={<Todos token={token} user={user} setUser={setUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
