import React from "react";
import "./header.css";
import logo from "../../utilities/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container mb-3 mt-1 mt-lg-3">
      <nav className="navbar navbar-expand-lg navbar-light  my-navbar ">
        <div className="container-fluid ">
          <NavLink to="/" className="navbar-brand header-logo">
            <img
              src={logo}
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            <h2>
              Tour<span>X</span>
            </h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <NavLink
                to="/"
                className="nav-link links mx-3"
                aria-current="page"
              >
                Home
              </NavLink>
              <NavLink to="/donation" className="nav-link links mx-3">
                Donation
              </NavLink>

              <NavLink to="/mybookings" className="nav-link links mx-3">
                My Bookings
              </NavLink>

              <NavLink
                to="/managebookings"
                className="nav-link btn btn-sm header-button btn-secondary mx-3 mt-2 mb-2 mb-lg-0 mt-lg-0"
              >
                Manage all Bookings
              </NavLink>

              {user?.email ? (
                <a
                  onClick={logOut}
                  className="nav-link btn btn-sm header-button btn-primary mx-3"
                >
                  Log Out {user.displayName}
                </a>
              ) : (
                <NavLink
                  to="/login"
                  className="nav-link btn btn-sm header-button btn-primary mx-3"
                >
                  Register or Log In
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
