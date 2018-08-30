/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import ButtonIcon from "../../common/ButtonIcon";
import FullPost from "../../common/FullPost";
import HeaderTitle from "../../common/HeaderTitle";
import type { Post } from "../../../types/types";
import { deletePost } from "../../../actions/postsAction";
import { SHADOW_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object,
  post: Post,
  deletePost: Function
};

class FinishPost extends PureComponent<Props> {
  navigateToPreviousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };
  deletePost = () => {
    const { deletePost, post } = this.props;
    deletePost(post.id);
  };

  render() {
    const { post } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header}>
            <ButtonIcon
              iconName="chevron-left"
              onPress={this.navigateToPreviousPage}
            />
            <HeaderTitle text="POST" />
            <ButtonIcon iconName="minus" onPress={this.deletePost} />
          </View>
        </View>
        <FullPost
          userName={post.userName}
          likes={post.likes}
          tag={post.tag}
          description={post.description}
          uri={{ uri: post.uri }}
          uriPhoto={{ uri: post.uriPhoto }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: SHADOW_COLOR,
    alignItems: "center",
    padding: 20,
    paddingTop: 10
  },
  header: {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FinishPost);
