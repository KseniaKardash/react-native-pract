import { expectSaga, testSaga } from "redux-saga-test-plan";
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

describe("worldClockSaga test", () => {
  const response = {
    data: {
      dayOfTheWeek: "Wednesday"
    }
  };

  it("Should handles errors", () => {
    return expectSaga(getDay)
      .provide([[call(api.fetchDayOfTheWeek), throwError()]])
      .put(requestDayError())
      .run();
  });

  it("Should handles errors", () => {
    const error = new Error("error");
    testSaga(getDay)
      .next()
      .throw(error)
      .put(requestDayError())
      .next()
      .isDone();
  });

  it("Should fetch a dayOfTheWeek successfully", () => {
    const saga = testSaga(getDay);
    saga
      .next()
      .call(api.fetchDayOfTheWeek)
      .next(response)
      .put(requestDaySuccess(response.data.dayOfTheWeek))
      .next()
      .isDone();
  });

  it("Should fetch a dayOfTheWeek successfully", () => {
    return expectSaga(getDay)
      .provide([[call(api.fetchDayOfTheWeek), response]])
      .put(requestDaySuccess(response.data.dayOfTheWeek))
      .run();
  });

  it("Should fetch a day into the store state", () => {
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

describe("postsSaga test", () => {
  const response = {
    data: []
  };

  it("Should handle errors", () => {
    return expectSaga(getPosts)
      .provide([[call(api.fetchPosts), throwError()]])
      .put(requestPostsError())
      .run();
  });

  it("Should handle errors", () => {
    testSaga(getPosts)
      .next()
      .call(api.fetchPosts)
      .next()
      .put(requestPostsError())
      .next()
      .isDone();
  });

  it("Should fetch posts successfully", () => {
    const saga = testSaga(getPosts);
    saga
      .next()
      .call(api.fetchPosts)
      .next(response)
      .put(requestPostsSuccess(response.data))
      .next()
      .isDone();
  });

  it("Should fetch posts successfully", () => {
    return expectSaga(getPosts)
      .provide([[call(api.fetchPosts), response]])
      .put(requestPostsSuccess(response.data))
      .run();
  });

  it("Should fetch posts into the store state", () => {
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
