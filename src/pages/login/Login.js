import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./login.css";
import logo from "../../utilities/logo.png";
import googleLogo from "../../utilities/search.png";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { googleSignIn, createUser, signIn, loading } = useAuth();
  const [regesterd, setRegestered] = useState(false);

  const redirect_uri = location?.state?.from || "/";

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (regesterd) {
      logIn(data.email, data.password);
    } else {
      newUserCreate(data.email, data.password);
    }

    // reset();
  };

  //   google sign in func
  const logInGoogle = () => {
    googleSignIn()
      .then((res) => {
        Swal.fire({
          //   position: "top-end",
          icon: "success",
          title: "You sign in With Google Successfully",
          showConfirmButton: false,
          timer: 2500,
        });
        history.push(redirect_uri);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
        });
      });
  };

  const newUserCreate = (email, pass) => {
    console.log(email, pass);
    createUser(email, pass)
      .then((res) => {
        Swal.fire({
          //   position: "top-end",
          icon: "success",
          title: "You Registered Successfully",
          showConfirmButton: false,
          timer: 2500,
        });
        history.push(redirect_uri);
      })
      .catch((error) => {
        Swal.fire({
          //   position: "top-end",
          icon: "error",
          title: error.message,
        });
      });
  };

  // log in function
  const logIn = (email, pass) => {
    signIn(email, pass)
      .then((res) => {
        Swal.fire({
          //   position: "top-end",
          icon: "success",
          title: "Loged in Successfully",
          showConfirmButton: false,
          timer: 2500,
        });
        history.push(redirect_uri);
      })
      .catch((error) => {
        Swal.fire({
          //   position: "top-end",
          icon: "error",
          title: error.message,
        });
      });
  };

  return (
    <div className="login">
      <Helmet>
        <title> Login </title>
      </Helmet>
      <div>
        <NavLink className="login-logo" to="/">
          <img src={logo} alt="" />{" "}
          <h2>
            Tour<span>X</span>
          </h2>
        </NavLink>
      </div>

      <div className="login-form-parent">
        <div className="login-form">
          <h4 className="mt-2">
            {regesterd ? "Login With" : " Register With"}
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <input
              className="form-control"
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />

            <input
              className="email-login my-2"
              type="submit"
              value={regesterd ? "Log In" : "Register"}
            />
          </form>
          or
          <div onClick={logInGoogle} className="google-login mb-2">
            <div className="col-1">
              <img className="google-logo" src={googleLogo} alt="" />
            </div>
            <div className="col-11 text-center">Continue with Google</div>
          </div>
          <p>
            {regesterd ? "   Don't have an account?" : "Already an User?"}
            {regesterd ? (
              <span
                className="swith-login"
                onClick={() => setRegestered(!regesterd)}
              >
                Create an Account{" "}
              </span>
            ) : (
              <span
                onClick={() => setRegestered(!regesterd)}
                className="swith-login"
              >
                Log in{" "}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
