import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import user from "./user";

rootReducers = combineReducers({
  reducer1,
  user,
});

export default rootReducers;
