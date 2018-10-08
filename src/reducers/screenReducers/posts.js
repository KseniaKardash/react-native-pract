/* @flow */
import * as types from "../../constants/actionTypes";
import type {
  Posts,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  GetPostsAction,
  FilterPostsAction,
  RequestPostsSuccess,
  RequestPostsError
} from "../../types/types";

export type Action =
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | GetPostsAction
  | RequestPostsError
  | RequestPostsSuccess
  | FilterPostsAction;

type State = {
  +posts: Posts,
  +fetching: boolean,
  +error: boolean
};

export const postsState = {
  posts: [],
  fetching: false,
  error: false
};

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
  state: State = postsState,
  action: Action
): State {
  switch (action.type) {
    case types.GET_POSTS:
      return { ...state, fetching: true };
    case types.GET_POSTS_SUCCESS:
      return { ...state, fetching: false, posts: action.posts };
    case types.GET_POSTS_FAILURE:
      return { ...state, fetching: false, error: true };
    case types.SEARCH_USER_NAME:
      return { ...state, fetching: true };
    case types.ADD_POST: {
      const posts = [action.post, ...state.posts];
      return { ...state, posts: posts };
    }
    case types.UPDATE_POST: {
      const posts = getPostsAfterUpdating(state.posts, action);
      return { ...state, posts: posts };
    }
    case types.DELETE_POST: {
      const initialPosts = [...state.posts];
      const posts = initialPosts.filter(post => post.id !== action.id);
      return { ...state, posts: posts };
    }
    default:
      return state;
  }
}
