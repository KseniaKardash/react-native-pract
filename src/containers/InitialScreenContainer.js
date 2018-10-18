/* @flow */
import { connect } from "react-redux";
import { requestDayOfWeek } from "../actions/postsFeedActions";
import InitialScreen from "../components/screens/InitialScreen/InitialScreen";
import {
  getDayOfTheWeek,
  getUser,
  getFetchingUserStatus,
  getAuthorizedUsers
} from "../selectors/index";
import {
  requestSignIn,
  requestSignOut
} from "../actions/authenticationActions";
import { requestPosts } from "../actions/postsActions";

const mapStateToProps = state => {
  return {
    dayOfTheWeek: getDayOfTheWeek(state),
    user: getUser(state),
    fetchingUser: getFetchingUserStatus(state),
    authorizedUsers: getAuthorizedUsers(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestDayOfWeek: () => dispatch(requestDayOfWeek()),
    requestSignIn: () => dispatch(requestSignIn()),
    requestSignOut: () => dispatch(requestSignOut()),
    requestPosts: id => dispatch(requestPosts(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialScreen);
