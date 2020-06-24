import TYPES from "../actions/constants";

const {
  SUBMITTING_TICKET,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAILURE,
  FETCHING_TICKETS,
  FETCH_REPORT_DATA,
} = TYPES;

const initialState = {
  submitting: false,
  fetchingTickets: false,
  ticket: {},
  tickets: [],
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
        tickets: action.tickets,
      };
    default:
      return state;
  }
};
