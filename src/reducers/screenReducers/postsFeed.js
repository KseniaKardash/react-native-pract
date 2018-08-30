/* @flow */
import {
  SEARCH_USER_NAME,
  SET_TOGGLE_SEARCH_BUTTON_STATUS
} from "../../constants/actionTypes";

type State = {
  +searchName: string,
  +toggleSearchStatus: boolean
};

const InitialState = {
  searchName: "",
  toggleSearchStatus: false
};

type SearchNameAction = { type: "SEARCH_USER_NAME", searchName: string };
type SearchToggleStatusAction = {
  type: "SET_TOGGLE_SEARCH_BUTTON_STATUS",
  toggleSearchStatus: boolean
};
type Action = SearchNameAction | SearchToggleStatusAction;

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
    default:
      return state;
  }
}
