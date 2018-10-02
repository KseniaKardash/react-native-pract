import { testSaga } from "redux-saga-test-plan";
import {
  requestDayOfWeek,
  requestDaySuccess,
  requestDayError
} from "../src/actions/postsFeedActions";
import { getDay } from "../src/sagas/worldClockSaga";
import { fetchDayOfTheWeek } from "../src/api/api";

describe("with redux-saga-test plan", () => {
  const action = { type: "TEST" };

  it("works as a unit test", () => {
    testSaga(getDay)
      .next(action)
      .put(requestDayOfWeek)
      .next(action)
      .call(fetchDayOfTheWeek)
      .next(dayOfWeek)
      .put(requestDaySuccess(dayOfWeek))
      .next()
      .isDone();
  });
});
