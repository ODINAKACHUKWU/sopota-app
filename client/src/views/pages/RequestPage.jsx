import React from "react";
import Dashboard from "../components/containers/Dashboard";
import TicketForm from "../components/containers/TicketForm";

const RequestPage = () => {
  return (
    <Dashboard>
      <h2 className="mb-5">SUBMIT TICKET</h2>
      <TicketForm />
    </Dashboard>
  );
};

export default RequestPage;
