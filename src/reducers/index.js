import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { PostReducer } from "./PostReducer";

// Setup
export default combineReducers({
  posts: PostReducer,
  users: UserReducer,
});
