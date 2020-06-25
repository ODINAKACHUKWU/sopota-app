import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MDSpinner from "react-md-spinner";
import PropTypes from "prop-types";
import { CSVLink } from "react-csv";
import Dashboard from "../components/containers/Dashboard";
import {
  fetchAgentTicketsRequest,
  fetchReportDataRequest,
} from "../../actions/creators/ticketActions";
import constants from "../../utils/constants";
import TicketsTable from "../components/elements/TicketsTable";

import "../../assets/stylesheets/components/elements/ticketstable.scss";

class AgentTicketsPage extends Component {
  componentDidMount = () => {
    const { fetchReport, fetchTickets } = this.props;
    fetchReport();
    fetchTickets();
  };

  render() {
    const { tickets, closedTickets } = this.props;
    const { HEADERS } = constants;
    return (
      <Dashboard>
        <h2 className="mb-5">MY TICKETS</h2>
        <div className="d-flex justify-content-end mb-3">
          <h5 className="mr-3 align-self-center">
            Export requests closed in the last one month
          </h5>
          <CSVLink
            className="btn btn-info"
            data={closedTickets}
            headers={HEADERS}
            filename={`tickets-${new Date()}.csv`}
          >
            Export as CSV
          </CSVLink>
        </div>
        {tickets ? (
          <table class="table table-striped" id="tickets-table">
            <thead className="thead" id="tickets-table-head">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subject</th>
                <th scope="col">Department</th>
                <th scope="col">Status</th>
                <th scope="col">Opened</th>
              </tr>
            </thead>
            <tbody id="tickets-table-body">
              {tickets.map((ticket) => (
                <TicketsTable ticket={ticket} />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="d-flex justify-content-center">
            {" "}
            <MDSpinner />
          </div>
        )}
      </Dashboard>
    );
  }
}

AgentTicketsPage.propTypes = {
  fetchReport: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired,
  tickets: PropTypes.array.isRequired,
  closedTickets: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchTickets: () => dispatch(fetchAgentTicketsRequest()),
  fetchReport: () => dispatch(fetchReportDataRequest()),
});

const mapStateToProps = ({ ticket: { tickets, closedTickets } }) => ({
  tickets,
  closedTickets,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AgentTicketsPage)
);
