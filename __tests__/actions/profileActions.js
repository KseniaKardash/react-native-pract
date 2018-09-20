import "react-native";
import { setUserName, setUserPhoto } from "../../src/actions/profileActions";
import * as types from "../../src/constants/actionTypes";

describe("actions", () => {
  it("should create an action to add a user name", () => {
    const userName = "Ksenia Kardash";
    const expectedAction = {
      type: types.SET_USERNAME,
      userName
    };
    expect(setUserName(userName)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to add a user photo", () => {
    const userPhoto =
      "https://i.pinimg.com/originals/dc/40/3c/dc403c09c8815be7b983b337f1936037.png";
    const expectedAction = {
      type: types.SET_USER_PHOTO,
      userPhoto
    };
    expect(setUserPhoto(userPhoto)).toEqual(expectedAction);
  });
});
