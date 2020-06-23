import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MDSpinner from "react-md-spinner";
import {
  authRequest,
  authFailure,
} from "../../../actions/creators/authActions.js";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { authenticated, processing, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  if (error === "Cannot read property 'data' of undefined") {
    dispatch(authFailure("Oops! Check your internet"));
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authRequest(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      {error ? <div className="alert alert-danger">{error}</div> : ""}
      <button type="submit" className="btn btn-info" disabled={processing}>
        {processing ? <MDSpinner /> : "Log in"}
      </button>
    </form>
  );
};

export default withRouter(LoginForm);
