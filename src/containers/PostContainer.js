/* @flow */
import { connect } from "react-redux";
import { deletePost } from "../actions/postsActions";
import Post from "../components/screens/Post/Post";
import { getUserId } from "../selectors/index";

const mapStateToProps = state => {
  return {
    userId: getUserId(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deletePost: (userId, id) => dispatch(deletePost(userId, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
