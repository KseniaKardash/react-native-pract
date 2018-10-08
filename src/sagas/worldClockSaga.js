/* @flow */
import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import {
  requestDaySuccess,
  requestDayError
} from "../actions/postsFeedActions";
import { fetchDayOfTheWeek } from "../api/api";

const watcherDaySaga = [takeEvery(types.GET_DAY_OF_WEEK, getDay)];

export function* getDay(): Generator<*, *, *> {
  try {
    const response = yield call(fetchDayOfTheWeek);
    const day = response.data.dayOfTheWeek;
    yield put(requestDaySuccess(day));
  } catch (error) {
    yield put(requestDayError());
  }
}

export default watcherDaySaga;
