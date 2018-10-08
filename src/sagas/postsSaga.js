/* @flow */
import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import {
  requestPostsSuccess,
  requestPostsError
} from "../actions/postsActions";
import {
  fetchPosts,
  deletePostFromServer,
  addNewPostToServer,
  updatePostOnServer,
  filterPostsByUserName
} from "../api/api";

const watcherPostsSaga = [
  takeEvery(types.GET_POSTS, getPosts),
  takeEvery(types.DELETE_POST, deletePost),
  takeEvery(types.ADD_POST, addPost),
  takeEvery(types.UPDATE_POST, updatePost),
  takeEvery(types.SEARCH_USER_NAME, filterPosts)
];

export function* getPosts(): Generator<*, *, *> {
  try {
    const response = yield call(fetchPosts);
    const posts = response.data;
    yield put(requestPostsSuccess(posts));
  } catch (error) {
    yield put(requestPostsError());
  }
}

function* deletePost(action): Generator<*, *, *> {
  yield call(deletePostFromServer, action.id);
}

function* addPost(action): Generator<*, *, *> {
  yield call(addNewPostToServer, action.post);
}

function* updatePost(action): Generator<*, *, *> {
  yield call(updatePostOnServer, action.post);
}

function* filterPosts(action): Generator<*, *, *> {
  try {
    const response = yield call(filterPostsByUserName, action.query);
    const posts = response.data;
    yield put(requestPostsSuccess(posts));
  } catch (error) {
    yield put(requestPostsError());
  }
}
export default watcherPostsSaga;
