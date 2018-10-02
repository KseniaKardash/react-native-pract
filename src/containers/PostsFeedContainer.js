/* @flow */
import { connect } from "react-redux";
import { setToggleSearchStatus } from "../actions/postsFeedActions";
import { filterPosts } from "../actions/postsActions";
import PostsFeed from "../components/screens/PostsFeed/PostsFeed";

const mapStateToProps = state => {
  return {
    searchName: state.postsFeed.searchName,
    toggleSearchStatus: state.postsFeed.toggleSearchStatus,
    posts: state.postsReducer.posts,
    loading: state.postsReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleSearchStatus: value => dispatch(setToggleSearchStatus(value)),
    filterPostsByUserName: query => dispatch(filterPosts(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsFeed);
