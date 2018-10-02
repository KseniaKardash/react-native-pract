/* @flow */
import { connect } from "react-redux";
import { setUserName, setUserPhoto } from "../actions/profileActions";
import { fetchPosts } from "../actions/postsActions";
import { fetchDayOfTheWeek } from "../actions/postsFeedActions";
import InitialScreen from "../components/screens/InitialScreen/InitialScreen";

const mapStateToProps = state => {
  return {
    userName: state.profile.userName,
    userPhoto: state.profile.userPhoto,
    posts: state.postsReducer,
    dayOfTheWeek: state.postsFeed.dayOfTheWeek
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserName: userName => dispatch(setUserName(userName)),
    setUserPhoto: userPhoto => dispatch(setUserPhoto(userPhoto)),
    fetchDayOfTheWeek: () => dispatch(fetchDayOfTheWeek()),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialScreen);
