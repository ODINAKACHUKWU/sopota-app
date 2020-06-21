import TYPES from "../actions/constants";

const { PROCESSING, AUTH_SUCCESS, AUTH_FAILURE, USER_LOGOUT } = TYPES;

const initialState = {
  authenticated: false,
  processing: false,
  user: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROCESSING:
      return {
        ...state,
        processing: action.bool,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.user,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case USER_LOGOUT:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};
