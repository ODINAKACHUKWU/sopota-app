import axios from "axios";
import TYPES from "../constants";
import constants from "../../utils/constants";

const { PROCESSING, AUTH_FAILURE, AUTH_SUCCESS, USER_LOGOUT } = TYPES;

const { BASE_URL } = constants;

const processing = (bool) => ({
  type: PROCESSING,
  bool,
});

const authSuccess = (user) => ({
  type: AUTH_SUCCESS,
  user,
});

const authFailure = (error) => ({
  type: AUTH_FAILURE,
  error,
});

const logoutUser = () => ({
  type: USER_LOGOUT,
});

const authRequest = (payload) => async (dispatch) => {
  const path = Object.keys(payload).includes("password_confirmation")
    ? "/users"
    : "/sessions";
  dispatch(processing(true));
  try {
    const url = `${BASE_URL}${path}`;
    const response = await axios.post(url, payload);
    const { auth_token, user } = response.data;
    localStorage.setItem("token", auth_token);
    dispatch(authSuccess(user));
  } catch (error) {
    dispatch(authFailure(error.response.data.message));
  } finally {
    dispatch(processing(false));
  }
};

const logoutRequest = () => async (dispatch) => {
  try {
    dispatch(processing(true));
    localStorage.removeItem("token");
    dispatch(logoutUser());
  } catch (error) {
    dispatch(authFailure(error));
  } finally {
    dispatch(processing(false));
  }
};

export { authSuccess, authFailure, authRequest, logoutRequest };
