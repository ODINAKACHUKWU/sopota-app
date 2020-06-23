import axios from "axios";
import TYPES from "../constants";
import constants from "../../utils/constants";

const {
  SUBMITTING_TICKET,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAILURE,
} = TYPES;

const { BASE_URL } = constants;

const submitting = (bool) => ({
  type: SUBMITTING_TICKET,
  bool,
});

const submitTicketSuccess = (user) => ({
  type: SUBMIT_TICKET_SUCCESS,
  user,
});

const submitTicketFailure = (error) => ({
  type: SUBMIT_TICKET_FAILURE,
  error,
});

const submitTicketRequest = (payload, token) => async (dispatch) => {
  const path = "tickets";
  dispatch(submitting(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(">>>>>>>>>>>", response);
    // const { auth_token, user } = response.data;
    // dispatch(submitTicketSuccess(ticket));
  } catch (error) {
    console.log(">>>>>>>>>", error);
    dispatch(submitTicketFailure(error.response.data.message));
  } finally {
    dispatch(submitting(false));
  }
};

export default submitTicketRequest;
