import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import { authRequest } from "../../../actions/creators/authActions.js";

class LoginForm extends Component {
  state = {
    userData: {
      email: "",
      password: "",
    },
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      userData: {
        ...prevState.userData,
        [id]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userData } = this.state;
    const { loginUser } = this.props;
    loginUser(userData).then(() => {
      const {
        authenticated,
        user,
        history: { push },
      } = this.props;
      if (authenticated && user.is_agent) {
        push("/dashboard/agent");
      } else if (authenticated && !user.is_agent) {
        push("/dashboard");
      } else {
        push("/");
      }
    });
  };

  render() {
    const { email, password } = this.state;
    const { processing, error } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        {error ? <div className="alert alert-danger">{error}</div> : ""}
        <button type="submit" className="btn btn-info" disabled={processing}>
          {processing ? <MDSpinner /> : "Log in"}
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = ({
  auth: { processing, authenticated, user, error },
}) => ({
  user,
  processing,
  authenticated,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userData) => dispatch(authRequest(userData)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
