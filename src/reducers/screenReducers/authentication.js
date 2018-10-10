/* @flow */
import * as types from "../../constants/actionTypes";
import * as flowType from "../../types/types";

type State = {
  +user: null | flowType.User,
  +fetchingUser: boolean,
  +error: boolean
};

export const authenticationState = {
  user: null,
  fetchingUser: false,
  error: false
};

type Action =
  | flowType.RequestSignIn
  | flowType.RequestSignInError
  | flowType.RequestSignInSuccess
  | flowType.RequestSignOut
  | flowType.RequestSignOutError
  | flowType.RequestSignOutSuccess;

export default function authenticationReducer(
  state: State = authenticationState,
  action: Action
): State {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
      return { ...state, fetchingUser: true };
    case types.SIGN_OUT_REQUEST:
      return { ...state, fetchingUser: true };
    case types.SIGN_IN_SUCCESS:
      return { ...state, fetchingUser: false, user: action.user };
    case types.SIGN_OUT_SUCCESS:
      return { ...state, fetchingUser: false, user: null };
    case types.SIGN_IN_FAILURE:
      return { ...state, fetchingUser: false, error: action.error };
    case types.SIGN_OUT_FAILURE:
      return { ...state, fetchingUser: false, error: action.error };
    default:
      return state;
  }
}
