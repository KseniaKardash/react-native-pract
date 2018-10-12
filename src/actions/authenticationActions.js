/* @flow */
import * as types from "../constants/actionTypes";
import * as flowType from "../types/types";

export function requestSignIn(): flowType.RequestSignIn {
  return {
    type: types.SIGN_IN_REQUEST
  };
}
export function requestSignInSuccess(
  user: flowType.User
): flowType.RequestSignInSuccess {
  return {
    type: types.SIGN_IN_SUCCESS,
    user: user
  };
}
export function requestSignInError(
  error: boolean
): flowType.RequestSignInError {
  return {
    type: types.SIGN_IN_FAILURE,
    error: error
  };
}
export function requestSignOut(): flowType.RequestSignOut {
  return {
    type: types.SIGN_OUT_REQUEST
  };
}
export function requestSignOutSuccess(
  userId: number
): flowType.RequestSignOutSuccess {
  return {
    type: types.SIGN_OUT_SUCCESS,
    userId: userId
  };
}
export function requestSignOutError(
  error: boolean
): flowType.RequestSignOutError {
  return {
    type: types.SIGN_OUT_FAILURE,
    error: error
  };
}

export function changeCurrentUser(
  user: flowType.User
): flowType.ChangeCurrentUser {
  return {
    type: types.CHANGE_CURRENT_USER,
    user: user
  };
}

export function deleteAuthorizedUser(userId: number) {
  return {
    type: types.DELETE_AUTHORIZED_USER,
    userId: userId
  };
}
