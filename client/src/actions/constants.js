import keymirror from "keymirror";

const TYPES = keymirror({
  PROCESSING: null,
  AUTH_SUCCESS: null,
  AUTH_FAILURE: null,
  USER_LOGOUT: null,
  FETCHING_USER: null,
  FETCH_USER: null,
  FETCH_USER_FAILURE: null,
  SUBMITTING_TICKET: null,
  SUBMIT_TICKET_SUCCESS: null,
  SUBMIT_TICKET_FAILURE: null,
  FETCHING_TICKETS: null,
  FETCH_REPORT_DATA: null,
});

export default TYPES;
