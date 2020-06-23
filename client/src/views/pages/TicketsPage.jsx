import React from "react";
import Dashboard from "../components/containers/Dashboard";
import TicketList from "../components/containers/TicketList";

const TicketsPage = () => {
  return (
    <Dashboard>
      <h2 className="mb-5">MY TICKETS</h2>
      <TicketList />
    </Dashboard>
  );
};

export default TicketsPage;
