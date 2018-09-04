/* @flow */
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POSTS
} from "../../constants/actionTypes";
import type {
  Posts,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  GetPostsAction
} from "../../types/types";

export type Action =
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | GetPostsAction;

const postsState = [];

function getIndex(postsArray, id) {
  const posts = cloneObject(postsArray);
  return posts.findIndex(obj => parseInt(obj.id) === parseInt(id));
}
function cloneObject(postsArray) {
  return [...postsArray];
}
function getPostsAfterUpdating(state, action) {
  const post = action.post;
  const posts = cloneObject(state);
  const index = getIndex(posts, post.id);
  if (index !== -1) {
    posts[index]["description"] = post.description;
    posts[index]["tag"] = post.tag;
  }
  return posts;
}

function getPostsAfterAddition(state, action) {
  const posts = cloneObject(state);
  posts.unshift(action.post);
  return posts;
}

function getPostsAfterRemoval(state, action) {
  const posts = cloneObject(state);
  const index = getIndex(posts, action.id);
  if (index !== -1) posts.splice(index, 1);
  return posts;
}

export default function postsReducer(
  state: Posts = postsState,
  action: Action
): Posts {
  switch (action.type) {
    case ADD_POST: {
      const posts = getPostsAfterAddition(state, action);
      return [...posts];
    }
    case UPDATE_POST: {
      const posts = getPostsAfterUpdating(state, action);
      return [...posts];
    }
    case GET_POSTS:
      return [...state, ...action.posts];

    case DELETE_POST: {
      const posts = getPostsAfterRemoval(state, action);
      return [...posts];
    }
    default:
      return state;
  }
}
