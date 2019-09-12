import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const rootReduser = combineReducers({
  user,
  post
});

export default rootReduser;
