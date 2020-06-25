import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../components/containers/Dashboard";
import AgentInterface from "../components/containers/AgentInterface";

import "../../assets/stylesheets/pages/landingpage.scss";

const AgentLandingPage = () => {
  const {
    user: { first_name },
  } = useSelector((state) => state.auth);

  let account = "agent";
  let greeting = first_name ? `Welcome ${first_name}` : "Welcome";

  return (
    <Dashboard>
      <AgentInterface greeting={greeting} account={account} />
    </Dashboard>
  );
};

export default AgentLandingPage;
