import React, { useState } from "react";
import { withRouter, BrowserRouter, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MDSpinner from "react-md-spinner";
import ticketValidator from "../../../helpers/validations/ticketValidator";
import {
  submitTicketRequest,
  submittingTicket,
  submitTicketSuccess,
} from "../../../actions/creators/ticketActions";

// =================== Use class component

const TicketForm = () => {
  const [ticketData, setTicketData] = useState({
    subject: "",
    description: "",
    department: "",
  });
  const [errors, setError] = useState({});
  const { submitting, ticket, error } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();

  const isValid = () => {
    const { errors, isValid } = ticketValidator(ticketData);
    if (!isValid) {
      setError(errors);
    }
    return isValid;
  };

  // if (submitting && ticket) {
  //   return <Redirect to={`/ticket/${ticket.id}`} />;
  // }

  const handleChange = (event) => {
    const { id, value } = event.target;
    setTicketData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      dispatch(submitTicketRequest(ticketData)).then((ticket) => {
        dispatch(submittingTicket(false));
        dispatch(submitTicketSuccess(ticket));
        // console.log(">>>>>>>>>", props);
        return <Redirect to={`/ticket/${ticket.id}`} />;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <div className="alert alert-danger">{error}</div> : ""}
      <div className="form-group">
        <label for="subject">Subject</label>
        <input
          type="text"
          className="form-control"
          id="subject"
          value={ticketData.subject}
          onChange={handleChange}
        />
      </div>
      {errors.subject && (
        <div className="alert alert-danger">{errors.subject}</div>
      )}
      <div className="form-group">
        <label for="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="10"
          placeholder="Describe the issue..."
          value={ticketData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      {errors.description && (
        <div className="alert alert-danger">{errors.description}</div>
      )}
      <div className="form-group">
        <label for="department">Select a department</label>
        <select
          className="form-control"
          id="department"
          value={ticketData.department}
          onChange={handleChange}
        >
          <option>Support/Customer care</option>
          <option>Sales/Marketing</option>
          <option>IT/Technical</option>
        </select>
      </div>
      {errors.department && (
        <div className="alert alert-danger">{errors.department}</div>
      )}
      <button type="submit" className="btn btn-info" disabled={submitting}>
        {submitting ? <MDSpinner /> : "Submit request"}
      </button>
    </form>
  );
};

export default withRouter(TicketForm);
