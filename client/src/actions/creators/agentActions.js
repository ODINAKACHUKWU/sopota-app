import axios from "axios";
import constants from "../../utils/constants";
import TYPES from "../constants";

const { BASE_URL } = constants;
const { FETCHING_AGENT, FETCH_AGENT_FAILURE, FETCH_AGENT_SUCCESS } = TYPES;

const fetchingAgent = (bool) => ({
  type: FETCHING_AGENT,
  bool,
});

const fetchAgentFailure = (error) => ({
  type: FETCH_AGENT_FAILURE,
  error,
});

const fetchAgentSuccess = (agent) => ({
  type: FETCH_AGENT_SUCCESS,
  agent,
});

const fetchAgentDetailsRequest = (id) => async (dispatch) => {
  const path = `agents/${id}`;
  dispatch(fetchingAgent(true));
  try {
    const url = `${BASE_URL}/${path}`;
    const token = localStorage.getItem("token");
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const agent = response.data;
    dispatch(fetchAgentSuccess(agent.user));
  } catch (error) {
    dispatch(fetchAgentFailure(error.response.data.message));
  } finally {
    dispatch(fetchingAgent(false));
  }
};

export default fetchAgentDetailsRequest;
