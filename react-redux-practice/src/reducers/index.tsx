import counter from "./counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
});

export default allReducers;
