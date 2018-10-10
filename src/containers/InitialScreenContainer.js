/* @flow */
import { connect } from "react-redux";
import { requestDayOfWeek } from "../actions/postsFeedActions";
import InitialScreen from "../components/screens/InitialScreen/InitialScreen";
import {
  getDayOfTheWeek,
  getUser,
  getFetchingUserStatus
} from "../selectors/index";
import {
  requestSignIn,
  requestSignOut
} from "../actions/authenticationActions";

const mapStateToProps = state => {
  return {
    dayOfTheWeek: getDayOfTheWeek(state),
    user: getUser(state),
    fetchingUser: getFetchingUserStatus(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestDayOfWeek: () => dispatch(requestDayOfWeek()),
    requestSignIn: () => dispatch(requestSignIn()),
    requestSignOut: () => dispatch(requestSignOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialScreen);
