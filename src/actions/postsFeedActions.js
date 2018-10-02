/* @flow */
import * as types from "../constants/actionTypes";
import type { SearchToggleStatusAction } from "../types/types";

export function setToggleSearchStatus(
  value: boolean
): SearchToggleStatusAction {
  return {
    type: types.SET_TOGGLE_SEARCH_BUTTON_STATUS,
    toggleSearchStatus: value
  };
}

export function fetchDayOfTheWeek() {
  return {
    type: types.FETCH_DAY_OF_WEEK
  };
}

export const requestDayOfWeek = () => {
  return { type: types.GET_DAY_OF_WEEK };
};

export const requestDaySuccess = (dayOfWeek: string) => {
  return { type: types.GET_DAY_OF_WEEK_SUCCESS, dayOfWeek: dayOfWeek };
};

export const requestDayError = () => {
  return { type: types.GET_DAY_OF_WEEK_FAILURE };
};
