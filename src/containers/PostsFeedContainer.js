/* @flow */
import { connect } from "react-redux";
import { setToggleSearchStatus } from "../actions/postsFeedActions";
import { filterPosts, requestPosts } from "../actions/postsActions";
import {
  getSearchName,
  getPosts,
  getPostsFetchingStatus,
  getToggleSearchStatus,
  getUser,
  getUserId
} from "../selectors/index";
import PostsFeed from "../components/screens/PostsFeed/PostsFeed";

const mapStateToProps = state => {
  return {
    searchName: getSearchName(state),
    toggleSearchStatus: getToggleSearchStatus(state),
    posts: getPosts(state),
    fetching: getPostsFetchingStatus(state),
    currentUser: getUser(state),
    userId: getUserId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleSearchStatus: value => dispatch(setToggleSearchStatus(value)),
    filterPostsByUserName: (id, query) => dispatch(filterPosts(id, query)),
    requestPosts: id => dispatch(requestPosts(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsFeed);
