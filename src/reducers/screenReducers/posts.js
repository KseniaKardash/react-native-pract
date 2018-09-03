/* @flow */
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POSTS
} from "../../constants/actionTypes";
import type {
  Post,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  GetPostsAction
} from "../../types/types";

type State = {
  +posts: Array<Post>
};

export type Action =
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | GetPostsAction;

const postsState = { posts: [] };

export default function postsReducer(
  state: State = postsState,
  action: Action
): State {
  switch (action.type) {
    case ADD_POST: {
      return { ...state, posts: action.posts };
    }
    case UPDATE_POST: {
      return { ...state, posts: action.posts };
    }
    case GET_POSTS:
      return { ...state, posts: action.posts };

    case DELETE_POST: {
      return { ...state, posts: action.posts };
    }
    default:
      return state;
  }
}
