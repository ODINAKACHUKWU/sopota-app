import TYPES from "../actions/constants";

const {
  SUBMITTING_TICKET,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAILURE,
} = TYPES;

const initialState = {
  submitting: false,
  ticket: {},
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
    default:
      return state;
  }
};
