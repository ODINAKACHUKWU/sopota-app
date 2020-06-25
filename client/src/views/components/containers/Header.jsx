import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faExclamationTriangle,
  faSignOutAlt,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../elements/Logo.jsx";
import { logoutRequest } from "../../../actions/creators/authActions";

import "../../../assets/stylesheets/components/containers/header.scss";

class Header extends Component {
  handleClick = () => {
    const {
      logoutUser,
      history: { push },
    } = this.props;

    logoutUser().then(() => {
      push("/");
    });
  };

  render() {
    const { loggedInUserEmail, isAdmin, isAgent } = this.props;
    const ticketPage = isAgent ? "/agent/tickets" : "/tickets";
    return (
      <nav className="navbar navbar-expand-lg background navbar-light">
        <div className="container">
          <Link to="/dashboard" className="navbar-brand">
            <Logo />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/account" id="account-link" className="nav-link">
                  {loggedInUserEmail}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/dashboard" className="dropdown-item">
                    <FontAwesomeIcon className="mr-2" icon={faHome} /> Home
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/account" className="dropdown-item">
                    <FontAwesomeIcon className="mr-2" icon={faUser} /> My
                    account
                  </Link>
                  {isAdmin || isAgent ? (
                    ""
                  ) : (
                    <div>
                      <div className="dropdown-divider"></div>
                      <Link to="/request" className="dropdown-item">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faExclamationTriangle}
                        />{" "}
                        Submit a ticket
                      </Link>
                    </div>
                  )}
                  <div className="dropdown-divider"></div>
                  <Link to={ticketPage} className="dropdown-item">
                    <FontAwesomeIcon className="mr-2" icon={faListAlt} /> My
                    tickets
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={this.handleClick}>
                    <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} /> Log
                    out
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  loggedInUserEmail: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isAgent: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutRequest()),
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
