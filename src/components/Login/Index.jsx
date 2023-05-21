import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../database/lowdb";
import { useHistory } from "react-router-dom";
import "./Index.css";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      alert("Please fill in all the fields");
      return;
    }

    const user = loginUser(identifier, password);
    if (user) {
      history.push("/main");
    } else {
      console.log("Invalid name, email or password");
    }
    setPassword("");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login to Rick & Morty App</h2>
      <label>
        Email or Username:
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </form>
  );
};

export default Login;
