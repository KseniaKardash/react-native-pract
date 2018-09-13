/* @flow */
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POSTS
} from "../constants/actionTypes";
import type {
  Post,
  Posts,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  GetPostsAction
} from "../types/types";
import realmV2 from "../database/index";

export function updatePostAction(post: Post): UpdatePostAction {
  return {
    type: UPDATE_POST,
    post: post
  };
}

export function deletePostAction(post: Post): DeletePostAction {
  return {
    type: DELETE_POST,
    post: post
  };
}

function addPostAction(post: Post): AddPostAction {
  return {
    type: ADD_POST,
    post: post
  };
}

function getPostsAction(posts: Posts): GetPostsAction {
  return {
    type: GET_POSTS,
    posts: posts
  };
}

type Dispatch = (action: Action | ThunkAction) => any;
type ThunkAction = (dispatch: Dispatch) => any;
type Action = GetPostsAction | AddPostAction | DeletePostAction | UpdatePostAction;

export function addPost(post: Post): ThunkAction {
  return dispatch => {
    realmV2.write(() => {
      realmV2.create("PostV2", post);
    });
    dispatch(addPostAction(post));
  };
}

export function deletePost(post: Post): ThunkAction {
  return dispatch => {
    realmV2.delete(post);
    dispatch(deletePostAction(post));
  };
}

export function getPosts(): ThunkAction {
  return dispatch => {
    const posts = realmV2.objects("PostV2");
    dispatch(getPostsAction(posts));
  };
}
