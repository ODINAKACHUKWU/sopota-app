import axios from "axios";
import constants from "../../utils/constants";
import TYPES from "../constants";

const { BASE_URL } = constants;
const {
  SUBMITTING_COMMENT,
  SUBMIT_COMMENT_FAILURE,
  SUBMIT_COMMENT_SUCCESS,
} = TYPES;

const submittingComment = (bool) => ({
  type: SUBMITTING_COMMENT,
  bool,
});

const submitCommentFailure = (error) => ({
  type: SUBMIT_COMMENT_FAILURE,
  error,
});

const submitCommentSuccess = (comment) => ({
  type: SUBMIT_COMMENT_SUCCESS,
  comment,
});

const submitCommentRequest = (ticketId, payload) => async (dispatch) => {
  const path = `tickets/${ticketId}/comments`;
  dispatch(submittingComment(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const comment = response.data;
    dispatch(submitCommentSuccess(comment));
  } catch (error) {
    dispatch(submitCommentFailure(error.response.data.message));
  } finally {
    dispatch(submittingComment(false));
  }
};

export default submitCommentRequest;
