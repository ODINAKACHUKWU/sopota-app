import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MDSpinner from "react-md-spinner";
import PropTypes from "prop-types";
import ticketValidator from "../../../helpers/validations/ticketValidator";
import { submitTicketRequest } from "../../../actions/creators/ticketActions";

class TicketForm extends Component {
  state = {
    ticketData: {
      subject: "",
      description: "",
      department: "",
    },
    errors: {},
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      ticketData: {
        ...prevState.ticketData,
        [id]: value,
      },
    }));
  };

  isValid = () => {
    const { ticketData } = this.state;
    const { errors, isValid } = ticketValidator(ticketData);
    if (!isValid) {
      this.setState((prevState) => ({
        ...prevState,
        errors,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        errors: {},
      }));
    }
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { ticketData } = this.state;
    const { submitTicket } = this.props;
    if (this.isValid()) {
      submitTicket(ticketData).then(() => {
        const {
          history: { push },
        } = this.props;
        push("/tickets");
      });
    }
  };
  render() {
    const {
      ticketData: { subject, description, department },
      errors,
    } = this.state;
    const { submitting, error } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {error ? <div className="alert alert-danger">{error}</div> : ""}
        <div className="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={this.handleChange}
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
            value={description}
            onChange={this.handleChange}
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
            value={department}
            onChange={this.handleChange}
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
  }
}

TicketForm.propTypes = {
  submitTicket: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = ({ ticket: { submitting, error } }) => ({
  submitting,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  submitTicket: (ticketData) => dispatch(submitTicketRequest(ticketData)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TicketForm)
);
