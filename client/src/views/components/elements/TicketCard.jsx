import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MDSpinner from "react-md-spinner";

import "../../../assets/stylesheets/components/elements/ticketcard.scss";

const TicketCard = (props) => {
  const { id, subject, description, department, agent, status } = props.ticket;
  //   const text = status == "closed" ? "Re-open" : "Close";
  return (
    <Link to={`/tickets/${id}`}>
      <div className="card shadow p-3">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-4">{subject}</div>
          <div className="col-4">{description.slice(0, 10)}...</div>
          <div className="col-2">{department}</div>
          <div
            id="comment-notification"
            className="col-2 rounded-pill text-nowrap px-5"
          >
            {status}
          </div>
          {/* <div className="col-2">
            <button className="btn btn-info">{text}</button>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default withRouter(TicketCard);
