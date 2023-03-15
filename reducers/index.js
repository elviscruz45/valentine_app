import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import user from "./user";
import post from "./post";
import comments from "./comments";

rootReducers = combineReducers({
  reducer1,
  user,
  post,
  comments,
});

export default rootReducers;
