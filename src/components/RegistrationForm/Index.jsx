import React, { useState } from "react";
import { createUser, getUsers } from "../../database/lowdb";
import { Link } from "react-router-dom";
import "./Index.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (password.length <= 5) {
      alert("Password must be longer than 5 characters");
      return;
    }

    if (!/\d/.test(password)) {
      alert("Password must contain at least one number");
      return;
    }

    const newUser = { name, password, email };
    createUser(newUser);

    dispatch(
      login({
        name: name,
        password: password,
        email: email,
        loggedIn: true,
      })
    );

    console.log("Submitted successfully:", { name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register to access rick'n'morty app</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button type="submit">Register</button>
      <br />
      <Link to="/login">Go to Login</Link>
    </form>
  );
};

export default RegistrationForm;
