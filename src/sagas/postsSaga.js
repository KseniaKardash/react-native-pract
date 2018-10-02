/* @flow */
import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import {
  requestPosts,
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
  takeEvery(types.FETCHED_POSTS, getPosts),
  takeEvery(types.DELETE_POST, deletePost),
  takeEvery(types.ADD_POST, addPost),
  takeEvery(types.UPDATE_POST, updatePost),
  takeEvery(types.SEARCH_USER_NAME, filterPosts)
];

function* getPosts(): Generator<*, *, *> {
  try {
    yield put(requestPosts());
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
    yield put(requestPosts());
    const response = yield call(filterPostsByUserName, action.query);
    const posts = response.data;
    yield put(requestPostsSuccess(posts));
  } catch (error) {
    yield put(requestPostsError());
  }
}
export default watcherPostsSaga;
