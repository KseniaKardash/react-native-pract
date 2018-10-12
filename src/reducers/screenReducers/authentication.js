/* @flow */
import * as types from "../../constants/actionTypes";
import * as flowType from "../../types/types";

type State = {
  +authorizedUsers: Array<flowType.User>,
  +user: null | flowType.User,
  +fetchingUser: boolean,
  +error: boolean
};

export const authenticationState = {
  authorizedUsers: [],
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
  | flowType.RequestSignOutSuccess
  | flowType.ChangeCurrentUser;

export default function authenticationReducer(
  state: State = authenticationState,
  action: Action
): State {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
      return { ...state, fetchingUser: true };
    case types.SIGN_OUT_REQUEST:
      return { ...state, fetchingUser: true };
    case types.SIGN_IN_SUCCESS: {
      const authorizedUsers = state.authorizedUsers.filter(user => {
        return user.userInfo.id !== action.user.userInfo.id;
      });
      return {
        ...state,
        fetchingUser: false,
        user: action.user,
        authorizedUsers: [...authorizedUsers, action.user]
      };
    }
    case types.SIGN_OUT_SUCCESS: {
      const authorizedUsers = state.authorizedUsers.filter(
        user => user.userInfo.id !== action.userId
      );
      // const authorizedUsers = state.authorizedUsers;
      return {
        ...state,
        fetchingUser: false,
        user: authorizedUsers[0],
        authorizedUsers: authorizedUsers
      };
    }
    case types.DELETE_AUTHORIZED_USER: {
      const authorizedUsers = state.authorizedUsers.filter(
        user => user.userInfo.id !== action.userId
      );
      return {
        ...state,
        fetchingUser: false,
        user: authorizedUsers[0],
        authorizedUsers: authorizedUsers
      };
    }
    case types.SIGN_IN_FAILURE:
      return { ...state, fetchingUser: false, error: action.error };
    case types.SIGN_OUT_FAILURE:
      return { ...state, fetchingUser: false, error: action.error };
    case types.CHANGE_CURRENT_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
