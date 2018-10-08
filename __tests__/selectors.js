import * as selectors from "../src/selectors/index";
import { postsState as postsReducer } from "../src/reducers/screenReducers/posts";
import { InitialState as profile } from "../src/reducers/screenReducers/profile";
import { InitialState as postsFeed } from "../src/reducers/screenReducers/postsFeed";

const state = {
  postsReducer: postsReducer,
  profile: profile,
  postsFeed: postsFeed
};

describe("Selectors", () => {
  describe("Profile", () => {
    it("Should return correctly getUserPhoto", () => {
      expect(selectors.getUserPhoto(state)).toBe(state.profile.userPhoto);
    });

    it("Should return correctly getUserName", () => {
      expect(selectors.getUserName(state)).toBe(state.profile.userName);
    });
  });

  describe("PostsReducer", () => {
    it("Should return correctly getPosts", () => {
      expect(selectors.getPosts(state)).toBe(state.postsReducer.posts);
    });

    it("Should return correctly getPostsFetchingStatus", () => {
      expect(selectors.getPostsFetchingStatus(state)).toBe(
        state.postsReducer.fetching
      );
    });
    it("Should return postsReducer.fetching as boolean", () => {
      expect(typeof selectors.getPostsFetchingStatus(state)).toEqual("boolean");
    });
  });

  describe("PostsFeed", () => {
    it("Should return correctly getDayOfTheWeek", () => {
      expect(selectors.getDayOfTheWeek(state)).toBe(
        state.postsFeed.dayOfTheWeek
      );
    });

    it("Should return correctly getSearchName", () => {
      expect(selectors.getSearchName(state)).toBe(state.postsFeed.searchName);
    });

    it("Should return correctly getToggleSearchStatus", () => {
      expect(selectors.getToggleSearchStatus(state)).toBe(
        state.postsFeed.toggleSearchStatus
      );
    });

    it("Should return postsFeed.toggleSearchStatus as boolean", () => {
      expect(typeof selectors.getToggleSearchStatus(state)).toEqual("boolean");
    });
  });
});
