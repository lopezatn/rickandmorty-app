import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/user profile.png";
import "./Index.css";
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links-left">
          <Link to="/register" className="navbar-link">
            Register
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/main" className="navbar-link">
            Main
          </Link>
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
        </div>
        <h2 className="navbar-title">Rick & Morty App</h2>
        <div className="navbar-links-right">
          <Link to="/profile" className="navbar-link">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </Link>
          <button className="navbar-link" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
