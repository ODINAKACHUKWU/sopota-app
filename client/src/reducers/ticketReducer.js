import TYPES from "../actions/constants";

const {
  SUBMITTING_TICKET,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAILURE,
  FETCHING_TICKETS,
  FETCH_REPORT_DATA,
  FETCH_AGENT_TICKETS,
  FETCH_TICKETS_FAILURE,
} = TYPES;

const initialState = {
  submitting: false,
  fetchingTickets: false,
  ticket: {},
  tickets: [],
  closedTickets: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMITTING_TICKET:
      return {
        ...state,
        submitting: action.bool,
      };
    case SUBMIT_TICKET_SUCCESS:
      return {
        ...state,
        ticket: action.ticket,
      };
    case SUBMIT_TICKET_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case FETCHING_TICKETS:
      return {
        ...state,
        fetchingTickets: action.bool,
      };
    case FETCH_REPORT_DATA:
      return {
        ...state,
        closedTickets: action.closedTickets,
      };
    case FETCH_AGENT_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };
    case FETCH_TICKETS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
