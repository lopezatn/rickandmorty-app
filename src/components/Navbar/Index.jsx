import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/user profile.png";
import "./Index.css";
import piedpiper from "../../assets/piedpiper.png";
import { logout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={piedpiper} alt="Logo" className="navbar-logo" />
        <div className={`navbar-links-left ${isAuthenticated ? "authenticated" : ""}`}>
          {!isAuthenticated && (
            <>
              <Link to="/register" className="navbar-link">
                Register
              </Link>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <Link to="/profile" className="navbar-link">
                Profile
              </Link>
              <Link to="/config" className="navbar-link">
                Config
              </Link>
              <Link to="/main" className="navbar-link">
                Main
              </Link>
            </>
          )}
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
