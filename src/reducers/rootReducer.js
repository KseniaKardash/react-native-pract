/* @flow */
import { combineReducers } from "redux";
import postsFeed from "./screenReducers/postsFeed";
import postsReducer from "./screenReducers/posts";

export default combineReducers({
  postsFeed,
  postsReducer
});
