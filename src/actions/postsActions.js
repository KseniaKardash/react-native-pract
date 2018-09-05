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
  GetPostsAction
} from "../types/types";
import { retrieveData, storeData } from "../api/asyncStorageApi";

type Action =
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction
  | GetPostsAction;

type Dispatch = (action: Action | ThunkAction) => any;
type ThunkAction = (dispatch: Dispatch) => any;

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
  return dispatch => {
    retrieveData("data", async (err, postsData) => {
      const posts = JSON.parse(postsData);
      await storeData("data", [post, ...posts]);
      dispatch(addPostAction(post));
    });
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
  return dispatch => {
    retrieveData("data", async (err, postsData) => {
      const InitialPosts = JSON.parse(postsData);
      const posts = InitialPosts.map(obj => {
        if (obj.id === post.id) {
          obj.description = post.description;
          obj.tag = post.tag;
          return obj;
        } else return obj;
      });
      await storeData("data", posts);
      dispatch(updatePostAction(post));
    });
  };
}

export function deletePost(id: number): ThunkAction {
  return dispatch => {
    retrieveData("data", async (err, postsData) => {
      const InitialPosts = JSON.parse(postsData);
      const posts = InitialPosts.filter(post => post.id !== id);
      await storeData("data", posts);
      dispatch(deletePostAction(id));
    });
  };
}
