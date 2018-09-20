/* @flow */
import {
  // SEARCH_USER_NAME,
  SET_TOGGLE_SEARCH_BUTTON_STATUS
} from "../constants/actionTypes";
import type { SearchToggleStatusAction } from "../types/types";

export default function setToggleSearchStatus(
  value: boolean
): SearchToggleStatusAction {
  return {
    type: SET_TOGGLE_SEARCH_BUTTON_STATUS,
    toggleSearchStatus: value
  };
}
