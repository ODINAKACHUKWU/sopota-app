import axios from "axios";
import TYPES from "../constants";
import constants from "../../utils/constants";

const {
  SUBMITTING_TICKET,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAILURE,
  FETCHING_TICKETS,
  FETCH_REPORT_DATA,
  FETCH_AGENT_TICKETS,
  FETCH_TICKETS_FAILURE,
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

const fetchReportData = (closedTickets) => ({
  type: FETCH_REPORT_DATA,
  closedTickets,
});

const fetchAgentTickets = (tickets) => ({
  type: FETCH_AGENT_TICKETS,
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

const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
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
    dispatch(submitTicketSuccess(response.data));
  } catch (error) {
    dispatch(submitTicketFailure(error.response.data.message));
  } finally {
    dispatch(submittingTicket(false));
  }
};

const fetchReportDataRequest = () => async (dispatch) => {
  const path = "tickets/report";
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
    dispatch(fetchTicketsFailure(error.message));
  } finally {
    dispatch(fetchingTickets(false));
  }
};

const fetchAgentTicketsRequest = () => async (dispatch) => {
  const path = "agent/tickets";
  dispatch(fetchingTickets(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchAgentTickets(response.data));
  } catch (error) {
    dispatch(fetchTicketsFailure(error.message));
  } finally {
    dispatch(fetchingTickets(false));
  }
};

export {
  submitTicketRequest,
  fetchAgentTicketsRequest,
  fetchReportDataRequest,
};
