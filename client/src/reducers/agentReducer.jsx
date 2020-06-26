import TYPES from "../actions/constants";

const { FETCHING_AGENT, FETCH_AGENT_FAILURE, FETCH_AGENT_SUCCESS } = TYPES;

const initialState = {
  fetchingAgent: false,
  agent: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_AGENT:
      return {
        ...state,
        fetchingAgent: action.bool,
      };
    case FETCH_AGENT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_AGENT_SUCCESS:
      return {
        ...state,
        agent: action.agent,
      };
    default:
      return state;
  }
};
