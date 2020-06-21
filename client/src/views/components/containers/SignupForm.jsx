import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import MDSpinner from "react-md-spinner";
import {
  authRequest,
  authFailure,
} from "../../../actions/creators/authActions.js";

const SignupForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { authenticated, processing, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authRequest(state));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group text-white">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group text-white">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group text-white">
        <input
          type="password"
          className="form-control"
          id="password_confirmation"
          placeholder="Comfirm password"
          value={state.password_confirmation}
          onChange={handleChange}
        />
      </div>
      {error ? <div className="alert alert-danger">{error}</div> : ""}
      <button type="submit" className="btn btn-info" disabled={processing}>
        {processing ? <MDSpinner /> : "Create Account"}
      </button>
    </form>
  );
};

export default withRouter(SignupForm);
