import React from "react";
import Dashboard from "../components/containers/Dashboard";
import TicketDetails from "../components/containers/TicketDetails";

const TicketPage = () => {
  return (
    <Dashboard>
      <TicketDetails />
    </Dashboard>
  );
};

export default TicketPage;
