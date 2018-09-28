/* @flow */
import {
  SEARCH_USER_NAME,
  SET_TOGGLE_SEARCH_BUTTON_STATUS,
  SET_DAY_OF_WEEK
} from "../../constants/actionTypes";
import type {
  FilterPostsAction,
  SearchToggleStatusAction
} from "../../types/types";

type State = {
  +searchName: string,
  +toggleSearchStatus: boolean,
  +dayOfTheWeek: string
};

const InitialState = {
  searchName: "",
  toggleSearchStatus: false,
  dayOfTheWeek: ""
};

type Action = FilterPostsAction | SearchToggleStatusAction;

export default function postsFeed(
  state: State = InitialState,
  action: Action
): State {
  switch (action.type) {
    case SEARCH_USER_NAME:
      return {
        ...state,
        searchName: action.searchName
      };
    case SET_TOGGLE_SEARCH_BUTTON_STATUS:
      return {
        ...state,
        toggleSearchStatus: action.toggleSearchStatus
      };
    case SET_DAY_OF_WEEK:
      return {
        ...state,
        dayOfTheWeek: action.dayOfTheWeek
      };
    default:
      return state;
  }
}
