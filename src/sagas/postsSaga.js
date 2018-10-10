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

export function* getPosts({ id }: { id: number }): Generator<*, *, *> {
  try {
    const posts = yield call(fetchPosts, id);
    yield put(requestPostsSuccess(posts));
  } catch (error) {
    yield put(requestPostsError());
  }
}

function* deletePost({ userId, id }): Generator<*, *, *> {
  yield call(deletePostFromServer, userId, id);
}

function* addPost({ id, post }): Generator<*, *, *> {
  yield call(addNewPostToServer, id, post);
}

function* updatePost({ id, post }): Generator<*, *, *> {
  yield call(updatePostOnServer, id, post);
}

function* filterPosts({ id, query }): Generator<*, *, *> {
  try {
    const posts = yield call(filterPostsByUserName, id, query);
    yield put(requestPostsSuccess(posts));
  } catch (error) {
    yield put(requestPostsError());
  }
}
export default watcherPostsSaga;
