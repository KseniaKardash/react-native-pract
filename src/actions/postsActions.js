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

function getIndex(data, id) {
  return data.findIndex(post => parseInt(post.id) === parseInt(id));
}

export function addPost(post: Post): ThunkAction {
  return dispatch => {
    retrieveData("data", async (err, postsData) => {
      const posts = JSON.parse(postsData);
      posts.unshift(post);
      await storeData("data", posts);
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
      const posts = JSON.parse(postsData);
      const index = getIndex(posts, post.id);
      if (index !== -1) {
        posts[index]["description"] = post.description;
        posts[index]["tag"] = post.tag;
      }
      await storeData("data", posts);
      dispatch(updatePostAction(post));
    });
  };
}

export function deletePost(id: number): ThunkAction {
  return dispatch => {
    retrieveData("data", async (err, postsData) => {
      const posts = JSON.parse(postsData);
      const index = getIndex(posts, id);
      if (index !== -1) posts.splice(index, 1);
      await storeData("data", posts);
      dispatch(deletePostAction(id));
    });
  };
}
