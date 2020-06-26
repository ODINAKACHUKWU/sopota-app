import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MDSpinner from "react-md-spinner";
import PropTypes from "prop-types";
import commentValidator from "../../../helpers/validations/commentValidator";
import submitCommentRequest from "../../../actions/creators/commentActions";

class CommentForm extends Component {
  state = {
    commentData: {
      comment: "",
    },
    errors: {},
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      commentData: {
        ...prevState.commentData,
        [id]: value,
      },
    }));
  };

  isValid = () => {
    const { commentData } = this.state;
    const { errors, isValid } = commentValidator(commentData);
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
    const { commentData } = this.state;
    const { submitComment, ticket } = this.props;
    if (this.isValid()) {
      submitComment(ticket.id, commentData).then(() => {
        const {
          ticket,
          history: { push },
        } = this.props;
        push(`/tickets/${ticket.id}`);
      });
    }
  };
  render() {
    const {
      commentData: { comment },
      errors,
    } = this.state;
    const { submittingComment, error } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {error ? <div className="alert alert-danger">{error}</div> : ""}
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="comment"
            value={comment}
            onChange={this.handleChange}
          />
          <small id="textHelp" className="form-text text-muted">
            NOTE: You can only comment after your support agent has commented on
            this request!
          </small>
        </div>
        {errors.comment && (
          <div className="alert alert-danger">{errors.comment}</div>
        )}
        <button
          type="submit"
          className="btn btn-info"
          disabled={submittingComment}
        >
          {submittingComment ? <MDSpinner /> : "Submit comment"}
        </button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  submittingComment: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  ticket: PropTypes.object.isRequired,
};

const mapStateToProps = ({
  ticket: { ticket },
  comment: { submittingComment, error },
}) => ({
  submittingComment,
  error,
  ticket,
});

const mapDispatchToProps = (dispatch) => ({
  submitComment: (ticketId, commentData) =>
    dispatch(submitCommentRequest(ticketId, commentData)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentForm)
);
