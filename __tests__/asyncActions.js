import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { fetchDayOfTheWeek } from "../src/actions/postsFeedActions";
import * as types from "../src/constants/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("should dispatch action", async () => {
    fetchMock.get(`http://worldclockapi.com/api/json/est/now`, {
      body: { dayOfTheWeek: "Wednesday" },
      headers: { "content-type": "application/json" }
    });
    const result = fetchMock.routes[0].response.body.dayOfTheWeek;

    // const response = await fetch(`http://worldclockapi.com/api/json/est/now`);
    // const result = await response.json();

    const expectedActions = [
      { type: types.SET_DAY_OF_WEEK, dayOfTheWeek: result }
    ];
    const store = mockStore({ dayOfTheWeek: "" });

    return store.dispatch(fetchDayOfTheWeek()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
