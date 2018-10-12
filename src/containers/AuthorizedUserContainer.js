/* @flow */
import { connect } from "react-redux";
import {
  changeCurrentUser,
  deleteAuthorizedUser,
  requestSignOut
} from "../actions/authenticationActions";
import AuthorizedUser from "../components/common/AuthorizedUsers";

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentUser: user => dispatch(changeCurrentUser(user)),
    deleteAuthorizedUser: userId => dispatch(deleteAuthorizedUser(userId)),
    requestSignOut: () => dispatch(requestSignOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthorizedUser);
