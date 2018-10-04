/* @flow */
import { SET_USERNAME, SET_USER_PHOTO } from "../../constants/actionTypes";
import type { SetUserNameAction, SetUserPhotoAction } from "../../types/types";

type State = {
  +userName: string,
  +userPhoto: string
};

export const InitialState = {
  userName: "",
  userPhoto: ""
};

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
