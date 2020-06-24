import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./Header.jsx";
import getLoggedInUser from "../../../actions/creators/userActions";
import jwt from "../../../utils/jwt";

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const { user_id } = jwt.decode(token);

  useEffect(() => {
    dispatch(getLoggedInUser(user_id, token));
  }, [dispatch, token, user_id]);

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
};

export default withRouter(Dashboard);
