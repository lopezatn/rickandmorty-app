import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../database/lowdb";
import { useHistory } from "react-router-dom";
import "./Index.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

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
      alert("Invalid name, email or password");
    }
    setPassword("");
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <center>Username</center>
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </label>
        <label>
          <center>Password</center>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
        <p>
        <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
