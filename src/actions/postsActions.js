/* @flow */
import { ADD_POST, DELETE_POST, UPDATE_POST } from "../constants/actionTypes";
import type {
  Post,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction
} from "../types/types";

export function addPost(post: Post): AddPostAction {
  return {
    type: ADD_POST,
    post: post
  };
}

export function updatePost(post: Post): UpdatePostAction {
  return {
    type: UPDATE_POST,
    post: post
  };
}

export function deletePost(id: number): DeletePostAction {
  return {
    type: DELETE_POST,
    id: id
  };
}
