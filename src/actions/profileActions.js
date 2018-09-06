/* @flow */
import { SET_USERNAME, SET_USER_PHOTO } from "../constants/actionTypes";
import type { SetUserNameAction, SetUserPhotoAction } from "../types/types";

export function setUserName(userName: string): SetUserNameAction {
  return {
    type: SET_USERNAME,
    userName: userName
  };
}

export function setUserPhoto(userPhoto: string): SetUserPhotoAction {
  return {
    type: SET_USER_PHOTO,
    userPhoto: userPhoto
  };
}
