/* @flow */
import { AsyncStorage } from "react-native";
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POSTS
} from "../constants/actionTypes";
import testPosts from "../constants/testPosts";
import type { Post } from "../types/types";

type AddPostAction = { type: "ADD_POST", post: Post };
type DeletePostAction = { type: "DELETE_POST" };
type UpdatePostAction = { type: "UPDATE_POST" };
type GetPostsAction = { type: "GET_POSTS", posts: Array<Post> };

type Action =
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | GetPostsAction;

type Dispatch = (action: Action | ThunkAction) => any;
type ThunkAction = (dispatch: Dispatch) => any;

function getIndex(data, id) {
  let clone = JSON.parse(JSON.stringify(data));
  return clone.findIndex(obj => parseInt(obj.id) === parseInt(id));
}

export function addPost(post: Post): ThunkAction {
  return dispatch => {
    AsyncStorage.getItem("data", (err, posts) => {
      posts = JSON.parse(posts);
      posts.unshift(post);
      AsyncStorage.setItem("data", JSON.stringify(posts), () => {
        dispatch({ type: ADD_POST, post: post });
      });
    });
  };
}
export function getPosts(): ThunkAction {
  return dispatch => {
    AsyncStorage.getItem("data", async (err, posts) => {
      if (posts == null) {
        await AsyncStorage.setItem("data", JSON.stringify(testPosts));
      }
      dispatch({ type: GET_POSTS, posts: JSON.parse(posts) });
    });
  };
}

export function updatePost(post: Post): ThunkAction {
  return dispatch => {
    AsyncStorage.getItem("data", (err, posts) => {
      posts = JSON.parse(posts);
      var index = getIndex(posts, post.id);
      if (index !== -1) {
        posts[index]["description"] = post.description;
        posts[index]["tag"] = post.tag;
      }
      AsyncStorage.setItem("data", JSON.stringify(posts), () => {
        dispatch({ type: UPDATE_POST, post: post });
      });
    });
  };
}

export function deletePost(id: number): ThunkAction {
  return dispatch => {
    AsyncStorage.getItem("data", (err, posts) => {
      posts = JSON.parse(posts);
      const index = getIndex(posts, id);
      if (index !== -1) posts.splice(index, 1);
      AsyncStorage.setItem("data", JSON.stringify(posts), () => {
        dispatch({ type: DELETE_POST, id: id });
      });
    });
  };
}
