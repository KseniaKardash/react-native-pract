/* @flow */
import { connect } from "react-redux";
import { addPost } from "../actions/postsActions";
import FinishPost from "../components/screens/FinishPost/FinishPost";

const mapStateToProps = state => {
  return {
    userName: state.profile.userName,
    userPhoto: state.profile.userPhoto
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(addPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishPost);
