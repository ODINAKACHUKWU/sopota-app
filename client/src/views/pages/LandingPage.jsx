import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "../components/containers/Dashboard";
import CustomerInterface from "../components/containers/CustomerInterface";
import AgentInterface from "../components/containers/AgentInterface";

import "../../assets/stylesheets/pages/landingpage.scss";

const LandingPage = () => {
  const {
    user: { first_name, is_admin, is_agent },
  } = useSelector((state) => state.user);
  let [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    (() => {
      if (first_name) {
        setGreeting(`Welcome ${first_name}`);
      }
    })();
    return () => {
      setGreeting("Welcome");
    };
  }, [first_name]);

  let account = is_admin ? "administrator" : "agent";

  return (
    <Dashboard>
      {is_admin || is_agent ? (
        <AgentInterface greeting={greeting} account={account} />
      ) : (
        <CustomerInterface greeting={greeting} />
      )}
    </Dashboard>
  );
};

export default LandingPage;
