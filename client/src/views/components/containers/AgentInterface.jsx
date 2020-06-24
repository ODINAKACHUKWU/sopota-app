import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CSVLink } from "react-csv";
import { fetchRequestsData } from "../../../actions/creators/ticketActions";

class AgentInterface extends Component {
  componentDidMount() {
    const { fetchTickets } = this.props;
    fetchTickets();
  }

  render() {
    const { greeting, account } = this.props;
    const { tickets } = this.props;
    const headers = [
      { label: "ID", key: "id" },
      { label: "Subject", key: "subject" },
      { label: "Description", key: "description" },
      { label: "Department", key: "department" },
      { label: "Status", key: "status" },
      { label: "Created at", key: "created_at" },
      { label: "Closed at", key: "closed_at" },
      { label: "Agent ID", key: "agent_id" },
    ];
    return (
      <div>
        <h2 className="mb-5">
          {greeting}! You are logged in as an {account}
        </h2>
        <CSVLink
          className="btn btn-info"
          data={tickets}
          headers={headers}
          filename={`tickets-${new Date()}.csv`}
        >
          Export as CSV
        </CSVLink>
      </div>
    );
  }
}

const mapStateToProps = ({ ticket: { tickets } }) => ({
  tickets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTickets: () => dispatch(fetchRequestsData()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AgentInterface)
);
