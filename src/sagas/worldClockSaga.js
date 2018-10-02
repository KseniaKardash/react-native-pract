/* @flow */
import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import {
  requestDayOfWeek,
  requestDaySuccess,
  requestDayError
} from "../actions/postsFeedActions";
import { fetchDayOfTheWeek } from "../api/api";

const watcherDaySaga = [takeEvery(types.FETCH_DAY_OF_WEEK, getDay)];

export function* getDay(): Generator<*, *, *> {
  try {
    yield put(requestDayOfWeek());
    const response = yield call(fetchDayOfTheWeek);
    const day = response.data.dayOfTheWeek;
    yield put(requestDaySuccess(day));
  } catch (error) {
    yield put(requestDayError());
  }
}

export default watcherDaySaga;
