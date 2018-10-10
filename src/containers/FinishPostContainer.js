/* @flow */
import { connect } from "react-redux";
import { addPost } from "../actions/postsActions";
import FinishPost from "../components/screens/FinishPost/FinishPost";
import { getUserName, getUserPhoto, getUserInfo } from "../selectors/index";

const mapStateToProps = state => {
  return {
    userName: getUserName(state),
    userPhoto: getUserPhoto(state),
    userInfo: getUserInfo(state)
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
)(FinishPost);
