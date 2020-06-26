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
  FETCHING_TICKET,
  FETCH_TICKET_FAILURE,
  FETCH_TICKET_SUCCESS,
  CLOSING_TICKET,
  CLOSE_TICKET_SUCCESS,
  CLOSE_TICKET_FAILURE,
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

const fetchingTicket = (bool) => ({
  type: FETCHING_TICKET,
  bool,
});

const fetchTicketSuccess = (ticket) => ({
  type: FETCH_TICKET_SUCCESS,
  ticket,
});

const fetchTicketFailure = (bool) => ({
  type: FETCH_TICKET_FAILURE,
  bool,
});

const closingTicket = (bool) => ({
  type: CLOSING_TICKET,
  bool,
});

const closeTicketSuccess = (ticket) => ({
  type: CLOSE_TICKET_SUCCESS,
  ticket,
});

const closeTicketFailure = (error) => ({
  type: CLOSE_TICKET_FAILURE,
  error,
});

const closeTicketRequest = (id) => async (dispatch) => {
  const path = `tickets/${id}`;
  dispatch(closingTicket(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.patch(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(closeTicketSuccess(response.data));
  } catch (error) {
    dispatch(closeTicketFailure(error.message));
  } finally {
    dispatch(closingTicket(false));
  }
};

const fetchTicketRequest = (id) => async (dispatch) => {
  const path = `tickets/${id}`;
  dispatch(fetchingTicket(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchTicketSuccess(response.data));
  } catch (error) {
    dispatch(fetchTicketFailure(error.message));
  } finally {
    dispatch(fetchingTicket(false));
  }
};

const submitTicketRequest = (payload) => async (dispatch) => {
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
  fetchTicketRequest,
  closeTicketRequest,
};
