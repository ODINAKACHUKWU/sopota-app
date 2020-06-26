import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchTicketRequest,
  closeTicketRequest,
} from "../../../actions/creators/ticketActions";
import fetchAgentDetailsRequest from "../../../actions/creators/agentActions";
import CommentForm from "./CommentForm";

class TicketDetails extends Component {
  state = {};
  componentDidMount = () => {
    const { fetchTicket, fetchAgent } = this.props;
    const ticketId = this.getTicketId();
    fetchTicket(ticketId).then(() => {
      const { ticket } = this.props;
      fetchAgent(ticket.agent_id);
    });
  };

  getTicketId = () => {
    const urlDetails = window.location.pathname.split("/");
    return urlDetails[urlDetails.length - 1];
  };

  handleClick = () => {
    const { closeTicket } = this.props;
    const ticketId = this.getTicketId();
    closeTicket(ticketId).then(() => {
      const {
        history: { push },
      } = this.props;
      push(`/tickets/${ticketId}`);
    });
  };

  render() {
    const ticketId = this.getTicketId();
    const { ticket, agent } = this.props;
    const { subject, description, department, status, created_at } = ticket;
    const { user } = ticket;
    const { first_name, last_name } = agent;
    let name =
      user && user.first_name && user.last_name
        ? `${user.first_name} ${user.last_name}`
        : user && user.email;
    return (
      <div>
        <div className="card mb-5">
          <div className="card-header">
            <h5>TICKET #{ticketId}</h5>
            <div>
              <span className="font-weight-bold mr-3">Created by:</span> {name}
            </div>
          </div>
          <div className="card-body">
            <div className="row d-flex">
              <div className="col-md-2">
                <p className="font-weight-bold">Subject:</p>
              </div>
              <div className="col-md-10">
                <p className="card-title">{subject}</p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-2">
                <p className="font-weight-bold">Request description:</p>
              </div>
              <div className="col-md-10">
                <p className="card-title">{description}</p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-2">
                <p className="font-weight-bold">Department:</p>
              </div>
              <div className="col-md-10">
                <p className="card-title">{department}</p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-2">
                <p className="font-weight-bold">Opened:</p>
              </div>
              <div className="col-md-10">
                <p className="card-title">{created_at}</p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-2">
                <p className="font-weight-bold">Status:</p>
              </div>
              <div className="col-md-10">
                <p className="card-title">{status}</p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-2">
                <p className="font-weight-bold">Support agent:</p>
              </div>
              <div className="col-md-10">
                <p className="card-title">{`${first_name} ${last_name}`}</p>
              </div>
            </div>
            {ticket.status === "open" ? (
              <buton className="btn btn-info" onClick={this.handleClick}>
                Close ticket
              </buton>
            ) : (
              ""
            )}
          </div>
        </div>
        <h5>Comments:</h5>
        <div className="dropdown-divider"></div>
        {ticket && ticket.comments ? (
          <div>
            {ticket.comments.map((comment) => (
              <div className="card p-3 mb-3">
                <h6>
                  <span className="mr-2">by:</span>
                  {comment.user_id && comment.user_id === user.id
                    ? name
                    : `${first_name} ${last_name}`}
                </h6>
                <div className="dropdown-divider"></div>
                <div className="">{comment.comment}</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="mt-3 mb-5">
          <CommentForm />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTicket: (id) => dispatch(fetchTicketRequest(id)),
  fetchAgent: (id) => dispatch(fetchAgentDetailsRequest(id)),
  closeTicket: (id) => dispatch(closeTicketRequest(id)),
});

const mapStateToProps = ({ ticket: { ticket }, agent: { agent } }) => ({
  agent,
  ticket,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TicketDetails)
);
