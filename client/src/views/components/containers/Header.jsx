import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faExclamationTriangle,
  faSignOutAlt,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../elements/Logo.jsx";

import "../../../assets/stylesheets/components/containers/header.scss";

const Header = ({ loggedInUserEmail }) => {
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
                  <FontAwesomeIcon className="mr-2" icon={faUser} /> My account
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/request" className="dropdown-item">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faExclamationTriangle}
                  />{" "}
                  Submit a ticket
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/tickets" className="dropdown-item">
                  <FontAwesomeIcon className="mr-2" icon={faListAlt} /> My
                  tickets
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/" className="dropdown-item">
                  <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} /> Log
                  out
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
