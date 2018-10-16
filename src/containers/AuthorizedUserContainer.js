/* @flow */
import { connect } from "react-redux";
import {
  changeCurrentUser,
  deleteAuthorizedUser,
  requestSignOut
} from "../actions/authenticationActions";
import AuthorizedUser from "../components/common/AuthorizedUsers";
import { getUser } from "../selectors/index";

const mapStateToProps = state => {
  return {
    currentUser: getUser(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentUser: user => dispatch(changeCurrentUser(user)),
    deleteAuthorizedUser: userId => dispatch(deleteAuthorizedUser(userId)),
    requestSignOut: () => dispatch(requestSignOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizedUser);
