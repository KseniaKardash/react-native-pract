/* @flow */
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POSTS
} from "../constants/actionTypes";
import testPosts from "../constants/testPosts";
import type {
  Posts,
  Post,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  GetPostsAction,
  GetState
} from "../types/types";
import { retrieveData, storeData } from "../api/asyncStorageApi";

type Action =
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | GetPostsAction;

type Dispatch = (action: Action | ThunkAction) => any;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

function addPostAction(post: Post): AddPostAction {
  return {
    type: ADD_POST,
    post: post
  };
}

function deletePostAction(id: number): DeletePostAction {
  return {
    type: DELETE_POST,
    id: id
  };
}

function updatePostAction(post: Post): UpdatePostAction {
  return {
    type: UPDATE_POST,
    post: post
  };
}

function getPostsAction(posts: Posts): GetPostsAction {
  return {
    type: GET_POSTS,
    posts: posts
  };
}

export function addPost(post: Post): ThunkAction {
  return (dispatch, getState) => {
    const posts = getState().postsReducer;
    storeData("data", [post, ...posts]);
    dispatch(addPostAction(post));
  };
}

export function getPosts(): ThunkAction {
  return dispatch => {
    retrieveData("data", async (err, posts) => {
      if (posts == null) {
        await storeData("data", testPosts);
      }
      dispatch(getPostsAction(JSON.parse(posts)));
    });
  };
}

export function updatePost(post: Post): ThunkAction {
  return (dispatch, getState) => {
    const initialPosts = [...getState().postsReducer];
    const posts = initialPosts.map(obj => {
      if (obj.id === post.id) {
        return { ...obj, description: post.description, tag: post.tag };
      } else return obj;
    });
    storeData("data", posts);
    dispatch(updatePostAction(post));
  };
}

export function deletePost(id: number): ThunkAction {
  return (dispatch, getState) => {
    const initialPosts = [...getState().postsReducer];
    const posts = initialPosts.filter(post => post.id !== id);
    storeData("data", posts);
    dispatch(deletePostAction(id));
  };
}
