/* @flow */
import * as types from "../constants/actionTypes";
import type {
  Post,
  Posts,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  FilterPostsAction,
  RequestPostsSuccess
} from "../types/types";

export function updatePost(post: Post): UpdatePostAction {
  return {
    type: types.UPDATE_POST,
    post: post
  };
}

export function deletePost(id: string): DeletePostAction {
  return {
    type: types.DELETE_POST,
    id: id
  };
}

export function addPost(post: Post): AddPostAction {
  return {
    type: types.ADD_POST,
    post: post
  };
}

export function filterPosts(query: string): FilterPostsAction {
  return {
    type: types.SEARCH_USER_NAME,
    query: query
  };
}

export const fetchPosts = () => {
  return { type: types.FETCHED_POSTS };
};

export const requestPosts = () => {
  return { type: types.GET_POSTS };
};

export const requestPostsSuccess = (posts: Posts): RequestPostsSuccess => {
  return { type: types.GET_POSTS_SUCCESS, posts: posts };
};

export const requestPostsError = () => {
  return { type: types.GET_POSTS_FAILURE };
};
