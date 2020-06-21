import axios from "axios";
import constants from "../../utils/constants";
import TYPES from "../constants";
import { authSuccess } from "./authActions";

const { BASE_URL } = constants;
const { FETCHING_USER, FETCH_USER, FETCH_USER_FAILURE } = TYPES;

const fetching = (bool) => ({
  type: FETCHING_USER,
  bool,
});

const fetchUserSuccess = (user) => ({
  type: FETCH_USER,
  user,
});

const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  error,
});

const getLoggedInUser = (id, token) => async (dispatch) => {
  const path = `users/${id}`;
  dispatch(fetching(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    dispatch(fetchUserSuccess(user));
    dispatch(authSuccess(user));
  } catch (error) {
    dispatch(fetchUserFailure(error.response.data.message));
  } finally {
    dispatch(fetching(false));
  }
};

export default getLoggedInUser;
