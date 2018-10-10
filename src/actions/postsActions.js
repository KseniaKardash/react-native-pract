/* @flow */
import * as types from "../constants/actionTypes";
import type {
  Post,
  Posts,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  FilterPostsAction,
  RequestPostsSuccess,
  RequestPostsError,
  RequestPosts
} from "../types/types";

export function updatePost(id: number, post: Post): UpdatePostAction {
  return {
    type: types.UPDATE_POST,
    id: id,
    post: post
  };
}

export function deletePost(userId: number, id: string): DeletePostAction {
  return {
    type: types.DELETE_POST,
    userId: userId,
    id: id
  };
}

export function addPost(id: number, post: Post): AddPostAction {
  return {
    type: types.ADD_POST,
    id: id,
    post: post
  };
}

export function filterPosts(id: number, query: string): FilterPostsAction {
  return {
    type: types.SEARCH_USER_NAME,
    id: id,
    query: query
  };
}

export const requestPosts = (id: number): RequestPosts => {
  return { type: types.GET_POSTS, id: id };
};

export const requestPostsSuccess = (posts: Posts): RequestPostsSuccess => {
  return {
    type: types.GET_POSTS_SUCCESS,
    posts: posts
  };
};

export const requestPostsError = (): RequestPostsError => {
  return { type: types.GET_POSTS_FAILURE };
};
