import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/elements/Logo.jsx";
import LoginForm from "../components/containers/LoginForm.jsx";

// Styles
import "../../assets/stylesheets/pages/homepage.scss";

const HomePage = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <Logo />
          </Link>
        </div>
      </nav>
      <div className="background-img">
        <div className="overlay">
          <div className="container-fluid d-flex align-items-center justify-content-center h-100">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-md-12">
                <h1 className="display-4 font-weight-normal text-white mb-4">
                  Account Login
                </h1>
                <div className="border rounded p-4">
                  <p className="text-white">Log in to submit a request</p>
                  <LoginForm />
                </div>
                <p className="text-white mt-4">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-white">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
