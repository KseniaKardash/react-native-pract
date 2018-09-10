/* @flow */
import { connect } from "react-redux";
import {
  changeSearchName,
  setToggleSearchStatus
} from "../actions/postsFeedActions";
import PostsFeed from "../components/screens/PostsFeed/PostsFeed";

const mapStateToProps = state => {
  return {
    searchName: state.postsFeed.searchName,
    toggleSearchStatus: state.postsFeed.toggleSearchStatus,
    posts: state.postsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearchName: value => dispatch(changeSearchName(value)),
    setToggleSearchStatus: value => dispatch(setToggleSearchStatus(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsFeed);
