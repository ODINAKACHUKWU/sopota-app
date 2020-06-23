import React, { useState } from "react";
import Dashboard from "../components/containers/Dashboard";
import TicketDetails from "../components/containers/TicketDetails";

const TicketPage = () => {
  // const id =
  console.log(">>>>>>>>", window);
  return (
    <Dashboard>
      <h2 className="mb-5">TICKET #2</h2>
      {/* <h2 className="mb-5">TICKET #{id}</h2> */}
      <TicketDetails />
    </Dashboard>
  );
};

export default TicketPage;
