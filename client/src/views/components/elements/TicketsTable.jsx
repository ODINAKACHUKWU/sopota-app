import React from "react";
import { withRouter, Link } from "react-router-dom";

import "../../../assets/stylesheets/components/elements/ticketstable.scss";

const TicketsTable = (props) => {
  const { id, subject, department, status, created_at } = props.ticket;
  return (
    <tr key={id}>
      <th scope="row">
        <Link to={`/tickets/${id}`} className="text-decoration-none">
          {id}
        </Link>
      </th>
      <td>
        <Link to={`/tickets/${id}`} className="text-decoration-none">
          {subject}
        </Link>
      </td>
      <td>
        <Link to={`/tickets/${id}`} className="text-decoration-none">
          {department}
        </Link>
      </td>
      <td>
        <Link to={`/tickets/${id}`} className="text-decoration-none">
          {status}
        </Link>
      </td>
      <td>
        <Link to={`/tickets/${id}`} className="text-decoration-none">
          {created_at.split("T")[0]}
        </Link>
      </td>
    </tr>
  );
};

export default withRouter(TicketsTable);
