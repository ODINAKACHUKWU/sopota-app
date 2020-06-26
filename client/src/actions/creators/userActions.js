import axios from "axios";
import constants from "../../utils/constants";
import TYPES from "../constants";
import { authSuccess } from "./authActions";

const { BASE_URL } = constants;
const { FETCHING_USER, USER_DATA, FETCH_USER_FAILURE } = TYPES;

const fetching = (bool) => ({
  type: FETCHING_USER,
  bool,
});

const fetchUser = (user) => ({
  type: USER_DATA,
  user,
});

const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  error,
});

const fetchUserDetailsRequest = (id) => async (dispatch) => {
  const path = `users/${id}`;
  dispatch(fetching(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    dispatch(authSuccess(user));
    dispatch(fetchUser(user));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  } finally {
    dispatch(fetching(false));
  }
};

export default fetchUserDetailsRequest;
