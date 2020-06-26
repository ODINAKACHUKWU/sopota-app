import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import ticketReducer from "./ticketReducer";
import agentReducer from "./agentReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  ticket: ticketReducer,
  agent: agentReducer,
  comment: commentReducer,
});

export default rootReducer;
