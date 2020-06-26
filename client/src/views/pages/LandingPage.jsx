import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../components/containers/Dashboard";
import CustomerInterface from "../components/containers/CustomerInterface";

import "../../assets/stylesheets/pages/landingpage.scss";

const LandingPage = () => {
  const {
    user: { first_name },
  } = useSelector((state) => state.auth);

  let greeting = first_name ? `Welcome ${first_name}` : "Welcome";

  return (
    <Dashboard>
      <CustomerInterface greeting={greeting} />
    </Dashboard>
  );
};

export default LandingPage;
