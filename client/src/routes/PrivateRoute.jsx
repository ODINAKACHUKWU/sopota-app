import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import auth from "../helpers/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.authenticate() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  // location: PropTypes.shape(),
};

export default PrivateRoute;
