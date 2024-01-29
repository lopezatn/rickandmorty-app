import React, { useState } from "react";
import { createUser, getUserByEmail, getUserByUsername } from "../../database/lowdb";
import { Link } from "react-router-dom";
import "./Index.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingEmailUser = getUserByEmail(email);
    const existingUsername = getUserByUsername(name);

    if (existingEmailUser) {
      alert("The email you're trying to register already exists");
      return;
    }

    if (existingUsername) {
      alert("The username you're trying to register already exists");
      return;
    }

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
    const createdUserId = createUser(newUser);

    dispatch(
      login({
        id: createdUserId,
        name: name,
        password: password,
        email: email
      })
    );
    
    alert("29-01-2024: I am currently working on bug fixes, sorry for the mess.")
    history.push("/main");
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
