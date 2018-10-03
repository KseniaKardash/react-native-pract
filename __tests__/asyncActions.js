import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import { call } from "redux-saga/effects";
import {
  requestDaySuccess,
  requestDayError
} from "../src/actions/postsFeedActions";
import {
  requestPostsSuccess,
  requestPostsError
} from "../src/actions/postsActions";
import { getDay } from "../src/sagas/worldClockSaga";
import { getPosts } from "../src/sagas/postsSaga";
import * as api from "../src/api/api";
import postsFeed, {
  InitialState
} from "../src/reducers/screenReducers/postsFeed";
import postsPeducer, { postsState } from "../src/reducers/screenReducers/posts";

describe("test worldClockSaga", () => {
  const response = {
    data: {
      dayOfTheWeek: "Wednesday"
    }
  };
  it("handles errors", () => {
    return expectSaga(getDay)
      .provide([[call(api.fetchDayOfTheWeek), throwError()]])
      .put(requestDayError())
      .run();
  });

  it("fetched a dayOfTheWeek successfully", () => {
    return expectSaga(getDay)
      .provide([[call(api.fetchDayOfTheWeek), response]])
      .put(requestDaySuccess(response.data.dayOfTheWeek))
      .run();
  });

  it("fetched the day into the store state", () => {
    return expectSaga(getDay)
      .withReducer(postsFeed)
      .provide([[call(api.fetchDayOfTheWeek), response]])
      .hasFinalState({
        ...InitialState,
        dayOfTheWeek: response.data.dayOfTheWeek
      })
      .run();
  });
});

describe("test postsSaga", () => {
  const response = {
    data: []
  };

  it("handles errors", () => {
    return expectSaga(getPosts)
      .provide([[call(api.fetchPosts), throwError()]])
      .put(requestPostsError())
      .run();
  });

  it("fetched posts successfully", () => {
    return expectSaga(getPosts)
      .provide([[call(api.fetchPosts), response]])
      .put(requestPostsSuccess(response.data))
      .run();
  });

  it("fetched posts into the store state", () => {
    return expectSaga(getPosts)
      .withReducer(postsPeducer)
      .provide([[call(api.fetchPosts), response]])
      .hasFinalState({
        ...postsState,
        posts: response.data
      })
      .run();
  });
});
