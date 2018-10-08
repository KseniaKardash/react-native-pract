/* @flow */
import { connect } from "react-redux";
import { setUserName, setUserPhoto } from "../actions/profileActions";
import { requestDayOfWeek } from "../actions/postsFeedActions";
import InitialScreen from "../components/screens/InitialScreen/InitialScreen";
import { getUserName, getUserPhoto, getDayOfTheWeek } from "../selectors/index";

const mapStateToProps = state => {
  return {
    userName: getUserName(state),
    userPhoto: getUserPhoto(state),
    dayOfTheWeek: getDayOfTheWeek(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserName: userName => dispatch(setUserName(userName)),
    setUserPhoto: userPhoto => dispatch(setUserPhoto(userPhoto)),
    requestDayOfWeek: () => dispatch(requestDayOfWeek())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialScreen);
