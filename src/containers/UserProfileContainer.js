/* @flow */
import { connect } from "react-redux";
import { addPost } from "../actions/postsActions";
import UserProfile from "../components/screens/UserProfile/UserProfile";
import { getUser, getPosts } from "../selectors/index";

const mapStateToProps = state => {
  return {
    user: getUser(state),
    posts: getPosts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (id, post) => dispatch(addPost(id, post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
