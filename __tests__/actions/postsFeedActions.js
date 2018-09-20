import "react-native";
import setToggleSearchStatus from "../../src/actions/postsFeedActions";
import * as types from "../../src/constants/actionTypes";

describe("actions", () => {
  it("should create an action to set a search value", () => {
    const value = false;
    const expectedAction = {
      type: types.SET_TOGGLE_SEARCH_BUTTON_STATUS,
      toggleSearchStatus: value
    };
    expect(setToggleSearchStatus(false)).toEqual(expectedAction);
  });
});
