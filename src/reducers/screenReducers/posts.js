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

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function getIndex(data, id) {
  const clone = JSON.parse(JSON.stringify(data));
  return clone.findIndex(obj => parseInt(obj.id) === parseInt(id));
}

export default function postsReducer(
  state: State = postsState,
  action: Action
): State {
  switch (action.type) {
    case ADD_POST: {
      const posts = cloneObject(state.posts);
      posts.unshift(action.post);
      state = Object.assign({}, state, { posts: posts });
      return state;
    }
    case UPDATE_POST: {
      const post = action.post;
      const posts = cloneObject(state.posts);
      const index = getIndex(posts, post.id);
      if (index !== -1) {
        posts[index]["description"] = post.description;
        posts[index]["tag"] = post.tag;
      }
      return Object.assign({}, state, { posts: posts });
    }
    case GET_POSTS:
      return Object.assign({}, state, { posts: action.posts });

    case DELETE_POST: {
      const posts = cloneObject(state.posts);
      const index = getIndex(posts, action.id);
      if (index !== -1) posts.splice(index, 1);
      state = Object.assign({}, state, { posts: posts });
      return state;
    }
    default:
      return state;
  }
}
