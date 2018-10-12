/* @flow */
import type { State } from "../types/types";

export const getUserName = (state: State) => state.profile.userName;
export const getUserPhoto = (state: State) => state.profile.userPhoto;
export const getPosts = (state: State) => state.postsReducer.posts;
export const getDayOfTheWeek = (state: State) => state.postsFeed.dayOfTheWeek;
export const getSearchName = (state: State) => state.postsFeed.searchName;
export const getPostsFetchingStatus = (state: State) =>
  state.postsReducer.fetching;
export const getToggleSearchStatus = (state: State) =>
  state.postsFeed.toggleSearchStatus;
export const getUser = (state: State) => state.authenticationReducer.user;
export const getFetchingUserStatus = (state: State) =>
  state.authenticationReducer.fetchingUser;
export const getUserId = (state: State) =>
  state.authenticationReducer.user.userInfo.id;
export const getUserInfo = (state: State) =>
  state.authenticationReducer.user.userInfo;
export const getAuthorizedUsers = (state: State) =>
  state.authenticationReducer.authorizedUsers;
