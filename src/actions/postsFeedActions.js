/* @flow */
import {
  SEARCH_USER_NAME,
  SET_TOGGLE_SEARCH_BUTTON_STATUS,
  SET_DAY_OF_WEEK
} from "../constants/actionTypes";
import type { SearchToggleStatusAction } from "../types/types";
import realm from "../database/index";

export function setToggleSearchStatus(
  value: boolean
): SearchToggleStatusAction {
  return {
    type: SET_TOGGLE_SEARCH_BUTTON_STATUS,
    toggleSearchStatus: value
  };
}

export function filterPostsByUserName(query: string): ThunkAction {
  return dispatch => {
    const postsData = realm
      .objects("Post")
      .filtered(`userName CONTAINS[c] "${query}"`);
    const posts = postsData.map(post => {
      return { ...post };
    });
    dispatch(filterPostsAction(posts));
  };
}

export function filterPostsAction(posts: Posts): FilterPostsAction {
  return {
    type: SEARCH_USER_NAME,
    posts: posts
  };
}

export function setDayOFWeekAction(dayOfTheWeek: string): SetDayOFWeekAction {
  return {
    type: SET_DAY_OF_WEEK,
    dayOfTheWeek: dayOfTheWeek
  };
}

export function fetchDayOfTheWeek(): ThunkAction {
  return dispatch => {
    return fetch(`http://worldclockapi.com/api/json/est/now`)
      .then(response => response.json())
      .then(response => dispatch(setDayOFWeekAction(response.dayOfTheWeek)));
  };
}
