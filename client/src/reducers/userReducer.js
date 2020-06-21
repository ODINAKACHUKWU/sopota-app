import TYPES from "../actions/constants";

const { FETCHING_USER, FETCH_USER, FETCH_USER_FAILURE } = TYPES;

const initialState = {
  fetching: false,
  user: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USER:
      return {
        ...state,
        fetching: action.bool,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.user,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
