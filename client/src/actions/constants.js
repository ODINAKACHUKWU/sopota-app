import keymirror from "keymirror";

const TYPES = keymirror({
  PROCESSING: null,
  AUTH_SUCCESS: null,
  AUTH_FAILURE: null,
  USER_LOGOUT: null,
  FETCHING_USER: null,
  USER_DATA: null,
  FETCH_USER_FAILURE: null,
  SUBMITTING_TICKET: null,
  SUBMIT_TICKET_SUCCESS: null,
  SUBMIT_TICKET_FAILURE: null,
  FETCHING_TICKETS: null,
  FETCH_REPORT_DATA: null,
  FETCH_AGENT_TICKETS: null,
  FETCH_TICKETS_FAILURE: null,
});

export default TYPES;
