/* @flow */
import { connect } from "react-redux";
import { deletePost } from "../actions/postsActions";
import Post from "../components/screens/Post/Post";

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Post);
