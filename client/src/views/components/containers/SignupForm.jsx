import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import { authRequest } from "../../../actions/creators/authActions.js";

class SignupForm extends Component {
  state = {
    userData: {
      email: "",
      password: "",
      password_confirmation: "",
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
    const { signupUser } = this.props;
    signupUser(userData).then(() => {
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
    const { email, password, password_confirmation } = this.state;
    const { processing, error } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group text-white">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group text-white">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group text-white">
          <input
            type="password"
            className="form-control"
            id="password_confirmation"
            placeholder="Comfirm password"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        </div>
        {error ? <div className="alert alert-danger">{error}</div> : ""}
        <button type="submit" className="btn btn-info" disabled={processing}>
          {processing ? <MDSpinner /> : "Create Account"}
        </button>
      </form>
    );
  }
}

SignupForm.propTypes = {
  signupUser: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = ({
  auth: { processing, authenticated, user, error },
}) => ({
  processing,
  authenticated,
  user,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  signupUser: (userData) => dispatch(authRequest(userData)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm)
);
