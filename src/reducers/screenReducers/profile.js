/* @flow */
import { SET_USERNAME, SET_USER_PHOTO } from "../../constants/actionTypes";

type State = {
  +userName: string,
  +userPhoto: string
};

const InitialState = {
  userName: "",
  userPhoto: ""
};

type SetUserNameAction = { type: "SET_USERNAME", userName: string };
type SetUserPhotoAction = { type: "SET_USER_PHOTO", userPhoto: string };

type Action = SetUserNameAction | SetUserPhotoAction;

export default function profile(
  state: State = InitialState,
  action: Action
): State {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        userName: action.userName
      };
    case SET_USER_PHOTO:
      return {
        ...state,
        userPhoto: action.userPhoto
      };
    default:
      return state;
  }
}
