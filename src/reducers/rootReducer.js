/* @flow */
import { combineReducers } from "redux";
import postsFeed from "./screenReducers/postsFeed";
import postsReducer from "./screenReducers/posts";
import profile from "./screenReducers/profile";

export default combineReducers({
  postsFeed,
  postsReducer,
  profile
});
