import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import ticketReducer from "./ticketReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  ticket: ticketReducer,
});

export default rootReducer;
