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

function getPostsAfterUpdating(state, action) {
  const post = action.post;
  const posts = [...state];
  return posts.map(obj => {
    if (obj.id === post.id) {
      const object = { ...obj };
      object.description = post.description;
      object.tag = post.tag;
      return object;
    } else return obj;
  });
}

export default function postsReducer(
  state: Posts = postsState,
  action: Action
): Posts {
  switch (action.type) {
    case ADD_POST: {
      return [action.post, ...state];
    }
    case UPDATE_POST: {
      const posts = getPostsAfterUpdating(state, action);
      return posts;
    }
    case GET_POSTS: {
      return [...state, ...action.posts];
    }
    case DELETE_POST: {
      const initialPosts = [...state];
      const posts = initialPosts.filter(post => post.id !== action.id);
      return posts;
    }
    default:
      return state;
  }
}
