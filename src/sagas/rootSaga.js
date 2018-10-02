import { all } from "redux-saga/effects";
import watcherDaySaga from "./worldClockSaga";
import watcherPostsSaga from "./postsSaga";

export default function* rootSaga() {
  yield all([...watcherDaySaga, ...watcherPostsSaga]);
}
