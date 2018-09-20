/* @flow */
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SEARCH_USER_NAME,
  GET_POSTS
} from "../../constants/actionTypes";
import type {
  Posts,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  GetPostsAction,
  FilterPostsAction
} from "../../types/types";

export type Action =
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | GetPostsAction
  | FilterPostsAction;

const postsState = [];

function getPostsAfterUpdating(state, action) {
  const post = action.post;
  const posts = [...state];
  return posts.map(obj => {
    if (obj.id === post.id) {
      return { ...obj, description: post.description, tag: post.tag };
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
      return action.posts;
    }
    case SEARCH_USER_NAME: {
      return action.posts;
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
