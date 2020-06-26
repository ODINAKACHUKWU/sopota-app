import TYPES from "../actions/constants";

const {
  SUBMITTING_COMMENT,
  SUBMIT_COMMENT_FAILURE,
  SUBMIT_COMMENT_SUCCESS,
} = TYPES;

const initialState = {
  submittingComment: false,
  comment: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMITTING_COMMENT:
      return {
        ...state,
        submittingComment: action.bool,
      };
    case SUBMIT_COMMENT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.comment,
      };
    default:
      return state;
  }
};
