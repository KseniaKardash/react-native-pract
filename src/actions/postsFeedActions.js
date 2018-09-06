/* @flow */
import {
  SEARCH_USER_NAME,
  SET_TOGGLE_SEARCH_BUTTON_STATUS
} from "../constants/actionTypes";
import type {
  SearchNameAction,
  SearchToggleStatusAction
} from "../types/types";

export function changeSearchName(value: string): SearchNameAction {
  return {
    type: SEARCH_USER_NAME,
    searchName: value
  };
}

export function setToggleSearchStatus(
  value: boolean
): SearchToggleStatusAction {
  return {
    type: SET_TOGGLE_SEARCH_BUTTON_STATUS,
    toggleSearchStatus: value
  };
}
