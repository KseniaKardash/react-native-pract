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
export function requestSignOutSuccess(): flowType.RequestSignOutSuccess {
  return {
    type: types.SIGN_OUT_SUCCESS
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
