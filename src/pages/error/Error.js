import React from "react";
import "./error.css";
import notFound from "../../utilities/notFound.png";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const Error = () => {
  return (
    <div className="notFound">
      <Helmet>
        <title> 404 Not Found </title>
      </Helmet>
      <img src={notFound} alt="" /> <br />
      <NavLink to="/"> Go Back to Website </NavLink>
    </div>
  );
};

export default Error;
