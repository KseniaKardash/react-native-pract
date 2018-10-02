/* @flow */
import * as types from "../../constants/actionTypes";
import type {
  SearchToggleStatusAction,
  FilterPostsAction,
  RequestDayOfWeekError,
  RequestDayOfWeekSuccess,
  requestDayOfWeek
} from "../../types/types";

type State = {
  +searchName: string,
  +toggleSearchStatus: boolean,
  +dayOfTheWeek: string,
  +fetching: boolean,
  +error: boolean
};

const InitialState = {
  searchName: "",
  toggleSearchStatus: false,
  dayOfTheWeek: "",
  fetching: false,
  error: false
};

export type Action =
  | SearchToggleStatusAction
  | requestDayOfWeek
  | RequestDayOfWeekError
  | RequestDayOfWeekSuccess
  | FilterPostsAction;

export default function postsFeed(
  state: State = InitialState,
  action: Action
): State {
  switch (action.type) {
    case types.GET_DAY_OF_WEEK:
      return { ...state, fetching: true };
    case types.GET_DAY_OF_WEEK_SUCCESS:
      return { ...state, fetching: false, dayOfTheWeek: action.dayOfWeek };
    case types.GET_DAY_OF_WEEK_FAILURE:
      return { ...state, fetching: false, error: true };
    case types.SEARCH_USER_NAME:
      return {
        ...state,
        searchName: action.query
      };
    case types.SET_TOGGLE_SEARCH_BUTTON_STATUS:
      return {
        ...state,
        toggleSearchStatus: action.toggleSearchStatus
      };
    default:
      return state;
  }
}
