import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import user from "./user";
import post from "./post";

rootReducers = combineReducers({
  reducer1,
  user,
  post,
});

export default rootReducers;
