import { combineReducers } from "redux";

// Authentication
import Login from "./auth/login/reducer";
// Front
import Layout from "./layouts/reducer";
const rootReducer = combineReducers({
  Login,
  Layout
});

export default rootReducer;
