import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  fetchAgentTicketsRequest,
  fetchReportDataRequest,
} from "../../../actions/creators/ticketActions";

class AgentInterface extends Component {
  componentDidMount() {
    const { fetchTickets, fetchReport } = this.props;
    fetchTickets();
    fetchReport();
  }

  render() {
    const { greeting, account } = this.props;
    const { tickets, closedTickets } = this.props;
    return (
      <div>
        <h2 className="mb-5">
          {greeting}! You are logged in as an {account}
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Assigned Requests</h5>
                <div className="dropdown-divider"></div>
                <h1>{tickets.length}</h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Closed Requests</h5>
                <div className="dropdown-divider"></div>
                <h1>{closedTickets.length}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AgentInterface.propTypes = {
  greeting: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  closedTickets: PropTypes.array.isRequired,
  tickets: PropTypes.array.isRequired,
};

const mapStateToProps = ({ ticket: { tickets, closedTickets } }) => ({
  tickets,
  closedTickets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTickets: () => dispatch(fetchAgentTicketsRequest()),
  fetchReport: () => dispatch(fetchReportDataRequest()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AgentInterface)
);
