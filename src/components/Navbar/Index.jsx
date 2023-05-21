import React from "react";
import { Link } from "react-router-dom";
import profileIcon from '../../assets/user profile.png';
import "./Index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-title">Rick & Morty App</h2>
        <div className="navbar-links">
          <Link to="/login" className="navbar-link">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </Link>
          <Link to="/register" className="navbar-link">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
