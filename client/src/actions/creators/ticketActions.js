import axios from "axios";
import TYPES from "../constants";
import constants from "../../utils/constants";

const {
  SUBMITTING_TICKET,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAILURE,
  FETCHING_TICKETS,
  FETCH_REPORT_DATA,
} = TYPES;

const { BASE_URL } = constants;

const submittingTicket = (bool) => ({
  type: SUBMITTING_TICKET,
  bool,
});

const fetchingTickets = (bool) => ({
  type: FETCHING_TICKETS,
  bool,
});

const fetchReportData = (tickets) => ({
  type: FETCH_REPORT_DATA,
  tickets,
});

const submitTicketSuccess = (ticket) => ({
  type: SUBMIT_TICKET_SUCCESS,
  ticket,
});

const submitTicketFailure = (error) => ({
  type: SUBMIT_TICKET_FAILURE,
  error,
});

const submitTicketRequest = (payload, token) => async (dispatch) => {
  const path = "tickets";
  dispatch(submittingTicket(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // dispatch(submitTicketSuccess(response.data));
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(submitTicketFailure(error.response.data.message));
    dispatch(submittingTicket(false));
  }
};

const fetchRequestsData = () => async (dispatch) => {
  const path = "tickets";
  dispatch(fetchingTickets(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchReportData(response.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(fetchingTickets(false));
  }
};

export {
  submitTicketRequest,
  submitTicketSuccess,
  submittingTicket,
  fetchRequestsData,
};
