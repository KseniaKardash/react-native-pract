/* @flow */
import { connect } from "react-redux";
import { addPost } from "../actions/postsActions";
import FinishPost from "../components/screens/FinishPost/FinishPost";
import { getUserName, getUserPhoto } from "../selectors/index";

const mapStateToProps = state => {
  return {
    userName: getUserName(state),
    userPhoto: getUserPhoto(state)
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
