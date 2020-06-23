import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MDSpinner from "react-md-spinner";
import TicketCard from "../elements/TicketCard";

const TicketList = () => {
  const { tickets, error } = useSelector((state) => state.ticket);
  const [ticketList, setTickets] = useState([
    {
      id: 1,
      subject: "My first issue",
      description: "This is my first issue",
      department: "IT",
      status: "open",
      agent: "Bimbola, Ajayi",
      created_at: "12/06/2020",
    },
  ]);
  const dispatch = useDispatch();
  return ticketList.map((ticket) => (
    <TicketCard key={ticket.id} ticket={ticket} />
  ));
};

export default withRouter(TicketList);
