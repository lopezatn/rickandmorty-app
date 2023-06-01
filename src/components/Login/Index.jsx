import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../database/lowdb";
import { useHistory } from "react-router-dom";
import "./Index.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      alert("Please fill in all the fields");
      return;
    }

    const user = getUser(identifier, password);
    if (user) {
      dispatch(login(user));
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
