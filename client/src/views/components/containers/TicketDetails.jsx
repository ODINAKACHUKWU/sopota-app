import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MDSpinner from "react-md-spinner";

const TicketDetails = () => {
  //   const { tickets, error } = useSelector((state) => state.ticket);
  //   const [ticketList, setTickets] = useState([
  //     {
  //       id: 1,
  //       subject: "My first issue",
  //       description: "This is my first issue",
  //       department: "IT",
  //       status: "open",
  //       agent: "Bimbola, Ajayi",
  //       created_at: "12/06/2020",
  //     },
  //   ]);
  const dispatch = useDispatch();
  return <div>Details</div>;
};

export default withRouter(TicketDetails);
