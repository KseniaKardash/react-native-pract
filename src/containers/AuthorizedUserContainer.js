/* @flow */
import { connect } from "react-redux";
import {
  changeCurrentUser,
  deleteAuthorizedUser,
  requestSignOut
} from "../actions/authenticationActions";
import AuthorizedUser from "../components/common/AuthorizedUsers";
import { getUser, getAuthorizedUsers } from "../selectors/index";
import { requestPosts } from "../actions/postsActions";

const mapStateToProps = state => {
  return {
    currentUser: getUser(state),
    authorizedUsers: getAuthorizedUsers(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentUser: user => dispatch(changeCurrentUser(user)),
    deleteAuthorizedUser: userId => dispatch(deleteAuthorizedUser(userId)),
    requestSignOut: () => dispatch(requestSignOut()),
    requestPosts: id => dispatch(requestPosts(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizedUser);
