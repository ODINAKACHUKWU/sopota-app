import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import Dashboard from "../components/containers/Dashboard";
import TicketsTable from "../components/elements/TicketsTable";

import "../../assets/stylesheets/components/elements/ticketstable.scss";

class TicketsPage extends Component {
  // componentDidMount = () => {

  // };
  render() {
    const { user, ticket } = this.props;
    return (
      <Dashboard>
        <h2 className="mb-5">MY TICKETS</h2>
        {Object.keys(ticket).length > 0 ? (
          <div className="alert alert-success">
            Your request has been submitted successfully
          </div>
        ) : (
          ""
        )}
        {user.tickets ? (
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
              {user.tickets.map((ticket) => (
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

TicketsPage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user: { user }, ticket: { ticket } }) => ({
  user,
  ticket,
});

export default withRouter(connect(mapStateToProps)(TicketsPage));
