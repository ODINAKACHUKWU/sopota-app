import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import fetchUserDetailsRequest from "../../../actions/creators/userActions";
import jwt from "../../../utils/jwt";

class Dashboard extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const { user_id } = jwt.decode(token);
    const { fetchUserDetails } = this.props;
    fetchUserDetails(user_id);
  };

  render() {
    const { children, user } = this.props;
    return (
      <Fragment>
        <Header
          loggedInUserEmail={user.email}
          isAgent={user.is_agent}
          isAdmin={user.is_admin}
        />
        <div className="container mt-5">{children}</div>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  fetchUserDetails: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetails: (id) => dispatch(fetchUserDetailsRequest(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
