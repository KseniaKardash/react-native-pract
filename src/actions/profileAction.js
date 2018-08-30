/* @flow */
import { SET_USERNAME, SET_USER_PHOTO } from "../constants/actionTypes";

type SetUserNameAction = { type: "SET_USERNAME", userName: string };
type SetUserPhotoAction = { type: "SET_USER_PHOTO", userPhoto: string };

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
